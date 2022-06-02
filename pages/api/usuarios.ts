import { NextApiRequest, NextApiResponse } from 'next'
import { cadastrarUsuario } from '../../services/usuario'
import { IUserDb } from '../../types/usuario'

const UsuarioApi = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (request.method === 'POST') {
    try {
      const usuario: IUserDb = request.body

      if (usuario.l2uemail === undefined) {
        return response
          .status(400)
          .json({ statusCode: 400, message: 'Dados inválidos' })
      }
      const idUserInsert = await cadastrarUsuario(usuario)
      return response.status(201).json({
        statusCode: 201,
        success: `Usuario cadastrado -> ${idUserInsert}`,
      })
    } catch (err: any) {
      return response
        .status(500)
        .json({ statusCode: 500, message: err.message })
    }
  } else {
    return response
      .status(500)
      .json({ statusCode: 500, message: 'Method Not Allowed' })
  }
}

export default UsuarioApi
