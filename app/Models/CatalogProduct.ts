import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Catalog from './Catalog'
import NumberIdModel from './NumberIdModel'

export default class CatalogProduct extends NumberIdModel {
  public static override table = 'tbl_catalog_products'

  @column()
  public catalogId: number

  @belongsTo(() => Catalog)
  public catalog: BelongsTo<typeof Catalog>

  @column()
  public name: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
