import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import CatalogProduct from './CatalogProduct'

export default class Catalog extends BaseModel {
  public static override table = 'tbl_catalogs'

  @column({ isPrimary: true })
  public id: number

  @column()
  public sellerId: number

  @column()
  public name: string

  @hasMany(() => CatalogProduct)
  public catalogProducts: HasMany<typeof CatalogProduct>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
