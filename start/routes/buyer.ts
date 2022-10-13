import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('list-of-sellers', 'BuyerController.getListOfSellers').as('list-of-sellers')
  Route.get('seller-catalog/:sellerId', 'BuyerController.getSellerCatalog')
    .where('sellerId', /^[0-9]+$/)
    .as('seller-catalog')
  Route.post('create-order/:sellerId', 'BuyerController.createOrder')
    .where('sellerId', /^[0-9]+$/)
    .as('create-order')
})
  .middleware(['auth', 'buyerAuthz'])
  .prefix('api/buyer')
  .as('api-buyer')
