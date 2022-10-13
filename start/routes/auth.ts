import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('register', 'AuthController.register').as('register')
  Route.post('login', 'AuthController.login').as('login')
})
  .prefix('api/auth')
  .as('api-auth')
