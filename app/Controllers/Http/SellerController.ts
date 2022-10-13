import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Catalog from 'App/Models/Catalog'
import Order from 'App/Models/Order'
import SellerService from 'App/Services/SellerService'
import CreateCatalogValidator from 'App/Validators/CreateCatalogValidator'

export default class SellerController {
  public async createCatalog({ request, auth }: HttpContextContract): Promise<Catalog> {
    const createCatalogPayload = await request.validate(CreateCatalogValidator)
    return SellerService.createCatalog(auth.user!, createCatalogPayload)
  }

  public async getOrders({ auth }: HttpContextContract): Promise<Order[]> {
    return SellerService.getAllOrders(auth.user!.id)
  }
}
