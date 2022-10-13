import { rules, schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCatalogValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(50)]),
    products: schema.array([rules.minLength(1), rules.maxLength(10)]).members(
      schema.object().members({
        name: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(50)]),
        price: schema.number([rules.range(100, 9999.99)]),
      })
    ),
  })

  public messages: CustomMessages = {
    'name.string': 'Name must be a string',
    'name.required': 'Name is required',
    'name.minLength': 'Name must have at least {{ options.minLength }} characters',
    'name.maxLength': 'Name must have at most {{ options.maxLength }} characters',
    'products.required': 'Catalog Items are required',
    'products.*.name.required': 'Catalog Item Name is required',
    'products.*.name.minLength':
      'Catalog Item Name must have at least {{ options.minLength }} characters',
    'products.*.name.maxLength':
      'Catalog Item Name must have at most {{ options.maxLength }} characters',
    'products.*.price.required': 'Catalog Item Price is required',
    'products.*.price.range':
      'Catalog Item Price must be between {{ options.start }} and {{ options.stop }}',
  }
}
