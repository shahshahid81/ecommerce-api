import Catalog from 'App/Models/Catalog'
import User from 'App/Models/User'
import SellerService from 'App/Services/SellerService'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BuyerController {
  public async getListOfSellers(): Promise<User[]> {
    return SellerService.getAllSellers()
  }

  public async getSellerCatalog({ params }: HttpContextContract): Promise<Catalog> {
    return SellerService.getSellerCatalog(params.sellerId)
  }
}
