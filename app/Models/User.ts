import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export enum UserType {
  BUYER = 'BUYER',
  SELLER = 'SELLER',
}

export default class User extends BaseModel {
  public static override table = 'tbl_users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public type: UserType

  @column({ serializeAs: null })
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
