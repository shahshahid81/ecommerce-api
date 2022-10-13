import { BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import OrderItem from './OrderItem'
import NumberIdModel from './NumberIdModel'

export default class Order extends NumberIdModel {
  public static override table = 'tbl_orders'

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
}
