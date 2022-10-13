import User, { UserType } from 'App/Models/User'

class BuyerService {
  public getAllSellers(): Promise<User[]> {
    return User.query().where({ type: UserType.SELLER })
  }
}

export default new BuyerService()
