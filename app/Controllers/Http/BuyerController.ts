import User from 'App/Models/User'
import BuyerService from 'App/Services/BuyerService'

export default class AuthController {
  public async getListOfSellers(): Promise<User[]> {
    return BuyerService.getAllSellers()
  }
}
