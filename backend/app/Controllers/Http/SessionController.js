'use strict'

class UserSessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    console.log(auth)
    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = UserSessionController
