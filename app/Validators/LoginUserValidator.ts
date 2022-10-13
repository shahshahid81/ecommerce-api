import { rules, schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.maxLength(40),
      rules.regex(/^[a-zA-Z0-9\.\-_]*$/),
    ]),
    password: schema.string({ trim: true }, [rules.minLength(8), rules.maxLength(20)]),
  })

  public messages: CustomMessages = {
    'username.string': 'Username must be a string',
    'username.required': 'Username is required',
    'username.minLength': 'Username must have at least {{ options.minLength }} characters',
    'username.maxLength': 'Username must have at most {{ options.maxLength }} characters',
    'username.regex': "Username must contain Alphabets, numbers, '.', '-' and '_' only",
    'password.string': 'Password must be a string',
    'password.required': 'Password is required',
    'password.minLength': 'Password must have at least {{ options.minLength }} characters',
    'password.maxLength': 'Password must have at most {{ options.maxLength }} characters',
  }
}
