import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tbl_orders'

  public override async up(): Promise<void> {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.bigInteger('seller_id').references('id').inTable('tbl_users').onDelete('CASCADE')
      table.bigInteger('buyer_id').references('id').inTable('tbl_users').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(this.tableName)
  }
}
