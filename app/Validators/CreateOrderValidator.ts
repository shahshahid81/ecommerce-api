import { rules, schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CatalogProduct from 'App/Models/CatalogProduct'

export default class CreateOrderValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    catalogProductIds: schema.array([rules.minLength(1), rules.maxLength(10)]).members(
      schema.number([
        rules.exists({
          table: CatalogProduct.table,
          column: 'id',
        }),
      ])
    ),
  })

  public messages: CustomMessages = {
    'catalogProductIds.required': 'Order Items are required',
    'catalogProductIds.*.required': 'Order Item Id is required',
    'catalogProductIds.*.exists': 'Enter a valid Order Item Id',
  }
}
