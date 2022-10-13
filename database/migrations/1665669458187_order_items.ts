import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_order_items'

  public override async up(): Promise<void> {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.bigInteger('order_id').references('id').inTable('tbl_orders').onDelete('CASCADE')
      table
        .bigInteger('catalog_product_id')
        .references('id')
        .inTable('tbl_catalog_products')
        .onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(this.tableName)
  }
}
