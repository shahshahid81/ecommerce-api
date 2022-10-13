import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import CatalogProduct from './CatalogProduct'
import NumberIdModel from './NumberIdModel'

export default class Catalog extends NumberIdModel {
  public static override table = 'tbl_catalogs'

  @column()
  public sellerId: number

  @column()
  public name: string

  @hasMany(() => CatalogProduct)
  public catalogProducts: HasMany<typeof CatalogProduct>
}
