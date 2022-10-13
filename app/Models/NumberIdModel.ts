import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class NumberIdModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async generateUniqueId(model: NumberIdModel): Promise<void> {
    model.id = new Date().getTime() + this.random(1000, 9999)
  }

  private static random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
