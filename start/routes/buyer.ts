import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('list-of-sellers', 'BuyerController.getListOfSellers').as('list-of-sellers')
  Route.get('seller-catalog/:sellerId', 'BuyerController.getSellerCatalog')
    .where('sellerId', /^[0-9]+$/)
    .as('seller-catalog')
})
  .middleware(['auth', 'buyerAuthz'])
  .prefix('api/buyer')
  .as('api-buyer')
