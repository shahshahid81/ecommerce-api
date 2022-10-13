import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserType } from 'App/Models/User'

export default class SellerAuthz {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.user || auth.user.type !== UserType.SELLER) {
      throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
    }

    await next()
  }
}
