import BaseException from './BaseException'

export default class NotFoundException extends BaseException {
  constructor(message: string) {
    super(message, 'E_NOT_FOUND')
  }
}
