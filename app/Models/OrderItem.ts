import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import CatalogProduct from './CatalogProduct'
import NumberIdModel from './NumberIdModel'

export default class OrderItem extends NumberIdModel {
  public static override table = 'tbl_order_items'

  @column()
  public orderId: number

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>

  @column()
  public catalogProductId: number

  @belongsTo(() => CatalogProduct)
  public catalogProduct: BelongsTo<typeof CatalogProduct>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
