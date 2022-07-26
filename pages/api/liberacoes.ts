import { NextApiRequest, NextApiResponse } from 'next'
import { buscarLiberacoes, liberarOuNegar } from './../../services/liberacoes'

const Liberacoes = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    if (request.method === 'POST') {
      response.status(200).json('sampleUserData')
    } else if (request.method === 'GET') {
      const liberacoes = await buscarLiberacoes()

      response.status(200).json(liberacoes)
    } else {
      return response
        .status(500)
        .json({ statusCode: 500, message: 'Method Not Allowed' })
    }
  } catch (err: any) {
    response.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default Liberacoes
