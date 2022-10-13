import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('list-of-sellers', 'BuyerController.getListOfSellers').as('list-of-sellers')
})
  .middleware(['auth', 'buyerAuthz'])
  .prefix('api/buyer')
  .as('api-buyer')
