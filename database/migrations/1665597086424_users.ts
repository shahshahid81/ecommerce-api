import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import User from 'App/Models/User'

export default class UsersSchema extends BaseSchema {
  public override async up(): Promise<void> {
    this.schema.createTable(User.table, (table) => {
      table.bigInteger('id').primary()
      table.string('username', 255).notNullable().index()
      table.string('password', 180).notNullable()
      table.string('type').notNullable().index()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public override async down(): Promise<void> {
    this.schema.dropTable(User.table)
  }
}
