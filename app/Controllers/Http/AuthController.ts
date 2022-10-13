import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthService from 'App/Services/AuthService'
import LoginUserValidator from 'App/Validators/LoginUserValidator'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'

export default class AuthController {
  public async register({ request }: HttpContextContract): Promise<User> {
    const registerUserPayload = await request.validate(RegisterUserValidator)
    return AuthService.register(registerUserPayload)
  }

  public async login({ request, auth }: HttpContextContract): Promise<OpaqueTokenContract<User>> {
    const loginUserPayload = await request.validate(LoginUserValidator)
    return AuthService.login(loginUserPayload, auth)
  }
}
