import { Exception } from '@adonisjs/core/build/standalone'

export default class BaseException extends Exception {
  constructor(message: string, code: string, status = 422) {
    super(message, status, code)
  }
}
