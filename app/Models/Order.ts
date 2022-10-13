import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import OrderItem from './OrderItem'

export default class Order extends BaseModel {
  public static override table = 'tbl_orders'

  @column({ isPrimary: true })
  public id: number

  @column()
  public buyerId: number

  @belongsTo(() => User, { foreignKey: 'buyerId' })
  public buyer: BelongsTo<typeof User>

  @column()
  public sellerId: number

  @belongsTo(() => User, { foreignKey: 'sellerId' })
  public seller: BelongsTo<typeof User>

  @hasMany(() => OrderItem)
  public orderItems: HasMany<typeof OrderItem>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
