import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import CatalogProduct from './CatalogProduct'

export default class OrderItem extends BaseModel {
  public static override table = 'tbl_order_items'

  @column({ isPrimary: true })
  public id: number

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
