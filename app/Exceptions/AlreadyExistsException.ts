import BaseException from './BaseException'

export default class AlreadyExistsException extends BaseException {
  constructor(message: string) {
    super(message, 'E_ALREADY_EXISTS')
  }
}
