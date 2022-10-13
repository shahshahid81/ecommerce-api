import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Catalog from './Catalog'

export default class CatalogProduct extends BaseModel {
  public static override table = 'tbl_catalog_products'

  @column({ isPrimary: true })
  public id: number

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
