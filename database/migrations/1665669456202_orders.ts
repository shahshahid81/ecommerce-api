import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Order from 'App/Models/Order'

export default class extends BaseSchema {
  public override async up(): Promise<void> {
    this.schema.createTable(Order.table, (table) => {
      table.bigInteger('id').primary()
      table.bigInteger('seller_id').references('id').inTable('tbl_users').onDelete('CASCADE')
      table.bigInteger('buyer_id').references('id').inTable('tbl_users').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(Order.table)
  }
}
