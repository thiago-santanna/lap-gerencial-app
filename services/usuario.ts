import { db } from '../providers/db'
import { IUserDb } from '../types/usuario'

async function cadastrarUsuario(usuario: IUserDb): Promise<number> {
  const resultId = await db.insert([usuario], ['id']).into('lapa02')
  return Number(resultId[0])
}
export { cadastrarUsuario }
