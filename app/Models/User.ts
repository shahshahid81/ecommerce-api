import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import NumberIdModel from './NumberIdModel'

export enum UserType {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

export default class User extends NumberIdModel {
  public static override table = 'tbl_users'

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public type: UserType

  @column({ serializeAs: null })
  public rememberMeToken?: string

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
