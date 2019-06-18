'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const data = request.only(['name', 'email', 'password', 'admin'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
