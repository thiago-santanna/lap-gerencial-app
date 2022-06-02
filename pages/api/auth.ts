import { NextApiRequest, NextApiResponse } from 'next'
import { login } from '../../services/auth'
import { IUser, IFieldsLogin } from '../../types/usuario'

const AuthApi = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (request.method === 'POST') {
      const credentials: IUser = request.body

      let fields: IFieldsLogin = {
        username: 'l2uemail',
        password: 'l2senhaw',
      }

      if (credentials.username.search('@') === -1) {
        fields = {
          username: 'l2nomeus',
          password: 'l2senhau',
        }
      }

      const resultado = await login(credentials, fields)
      response.status(200).json(resultado)
    } else {
      response.status(404).json('Method Not Allowed')
    }
  } catch (err: any) {
    response.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default AuthApi
