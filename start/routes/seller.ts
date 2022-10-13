import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create-catalog', 'SellerController.createCatalog').as('create-catalog')
  Route.get('orders', 'SellerController.getOrders').as('orders')
})
  .middleware(['auth', 'sellerAuthz'])
  .prefix('api/seller')
  .as('api-seller')
