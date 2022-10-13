import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create-catalog', 'SellerController.createCatalog').as('create-catalog')
})
  .middleware(['auth', 'sellerAuthz'])
  .prefix('api/seller')
  .as('api-seller')
