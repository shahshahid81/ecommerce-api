import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import CatalogProduct from 'App/Models/CatalogProduct'

export default class extends BaseSchema {
  public override async up(): Promise<void> {
    this.schema.createTable(CatalogProduct.table, (table) => {
      table.bigInteger('id').primary()
      table.bigInteger('catalog_id').references('id').inTable('tbl_catalogs').onDelete('CASCADE')
      table.string('name', 50)
      table.decimal('price', 6, 2)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(CatalogProduct.table)
  }
}
