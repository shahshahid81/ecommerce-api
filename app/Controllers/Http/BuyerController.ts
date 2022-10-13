import Catalog from 'App/Models/Catalog'
import User from 'App/Models/User'
import SellerService from 'App/Services/SellerService'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import CreateOrderValidator from 'App/Validators/CreateOrderValidator'
import BuyerService from 'App/Services/BuyerService'

export default class BuyerController {
  public async getListOfSellers(): Promise<User[]> {
    return SellerService.getAllSellers()
  }

  public async getSellerCatalog({ params }: HttpContextContract): Promise<Catalog> {
    return SellerService.getSellerCatalog(params.sellerId)
  }

  public async createOrder({ params, request, auth }: HttpContextContract): Promise<Order> {
    const orderRequestPayload = await request.validate(CreateOrderValidator)
    return BuyerService.createOrder(params.sellerId, auth.user!.id, orderRequestPayload)
  }
}
