import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Catalog from 'App/Models/Catalog'

export default class extends BaseSchema {
  public override async up(): Promise<void> {
    this.schema.createTable(Catalog.table, (table) => {
      table.bigInteger('id').primary()
      table.bigInteger('seller_id').references('id').inTable('tbl_users').onDelete('CASCADE')
      table.string('name', 50)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(Catalog.table)
  }
}
