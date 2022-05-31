import { NextApiRequest, NextApiResponse } from 'next'

const LoginApi = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sampleUserData = 'OK'

    res.status(200).json(sampleUserData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default LoginApi
