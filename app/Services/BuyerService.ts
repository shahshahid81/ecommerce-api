import Order from 'App/Models/Order'

type CreateOrder = { catalogProductIds: number[] }

class SellerService {
  public async createOrder(
    sellerId: number,
    buyerId: number,
    orderPayload: CreateOrder
  ): Promise<Order> {
    const order = await Order.create({ sellerId, buyerId })

    const orderItemsPayload = orderPayload.catalogProductIds.map((catalogProductId) => {
      return {
        orderId: order.id,
        catalogProductId,
      }
    })
    await order.related('orderItems').createMany(orderItemsPayload)
    await order.load('orderItems')

    return order
  }
}

export default new SellerService()
