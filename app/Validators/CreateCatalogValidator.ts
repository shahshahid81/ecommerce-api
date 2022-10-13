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

  public messages: CustomMessages = {}
}
