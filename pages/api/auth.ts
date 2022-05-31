import { NextApiRequest, NextApiResponse } from 'next'
import { login } from '../../services/auth'

interface IUser {
  username: string
  password: string
}

const AuthApi = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (request.method === 'POST') {
      const credentials: IUser = request.body
      const resultado = await login(credentials)
      response.status(200).json(resultado)
    } else {
      response.status(404).json('Method Not Allowed')
    }
  } catch (err: any) {
    response.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default AuthApi
