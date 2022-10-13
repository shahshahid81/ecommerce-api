import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import AlreadyExistsException from 'App/Exceptions/AlreadyExistsException'
import NotFoundException from 'App/Exceptions/NotFoundException'
import User, { UserType } from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

type RegisterUser = {
  username: string
  password: string
  type: UserType
}

type LoginUser = Pick<RegisterUser, 'username' | 'password'>

class AuthService {
  public async register(user: RegisterUser): Promise<User> {
    const existingUser = await User.query()
      .where({
        username: user.username,
      })
      .first()

    if (existingUser) {
      throw new AlreadyExistsException('User already exists')
    }

    return User.create(user)
  }

  public async login(
    { username, password }: LoginUser,
    auth: AuthContract
  ): Promise<OpaqueTokenContract<User>> {
    const user = await User.findBy('username', username)
    if (!user) {
      throw new NotFoundException('User not found')
    }

    return auth
      .use('api')
      .attempt(username, password, { expiresIn: `${Env.get('EXPIRES_IN', 24)} hours` })
  }
}

export default new AuthService()
