import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import OrderItem from 'App/Models/OrderItem'

export default class extends BaseSchema {
  public override async up(): Promise<void> {
    this.schema.createTable(OrderItem.table, (table) => {
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
    this.schema.dropTable(OrderItem.table)
  }
}
