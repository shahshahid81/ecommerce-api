import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class NumberIdModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @beforeCreate()
  public static async generateUniqueId(model: NumberIdModel): Promise<void> {
    model.id = new Date().getTime() + this.random(1000, 9999)
  }

  private static random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
