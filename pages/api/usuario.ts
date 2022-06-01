import { NextApiRequest, NextApiResponse } from 'next'

const UsuarioApi = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  if (request.method === 'POST') {
  } else {
    response.status(404).json('Method Not Allowed')
  }
}
