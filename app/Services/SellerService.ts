import AlreadyExistsException from 'App/Exceptions/AlreadyExistsException'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Catalog from 'App/Models/Catalog'
import Order from 'App/Models/Order'
import User, { UserType } from 'App/Models/User'

type CreateCatalog = {
  name: string
  products: { name: string; price: number }[]
}

class SellerService {
  public getAllSellers(): Promise<User[]> {
    return User.query().where({ type: UserType.SELLER })
  }

  public getAllOrders(sellerId: number): Promise<Order[]> {
    return Order.query().where({ sellerId })
  }

  public async getSellerCatalog(sellerId: number): Promise<Catalog> {
    const user = await User.query().where({ id: sellerId, type: UserType.SELLER })
    if (!user) {
      throw new NotFoundException('Seller not found')
    }

    const catalog = await Catalog.query().where({ sellerId }).first()
    if (!catalog) {
      throw new NotFoundException('Catalog not found')
    }

    await catalog.load('catalogProducts')

    return catalog
  }

  public async createCatalog(seller: User, catalogPayload: CreateCatalog): Promise<Catalog> {
    const existingCatalog = await Catalog.query().where({ sellerId: seller.id }).first()
    if (existingCatalog) {
      throw new AlreadyExistsException('Catalog for seller already exists')
    }

    const catalog = await Catalog.create({ name: catalogPayload.name, sellerId: seller.id })

    const catalogProductsPayload = catalogPayload.products.map((catalogProduct) => {
      return {
        ...catalogProduct,
        catalogId: catalog.id,
      }
    })
    await catalog.related('catalogProducts').createMany(catalogProductsPayload)
    await catalog.load('catalogProducts')

    return catalog
  }
}

export default new SellerService()
