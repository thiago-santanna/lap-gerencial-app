import { db } from '../providers/db'

interface IUser {
  username: string
  password: string
}

interface IUserDb {
  l2nomeus: string
  l2senhau: string
  l2utoken: string
  l2idusuar: number
  l2idempr: number
}

async function login(login: IUser): Promise<Boolean> {
  const sqlResult: IUserDb = await db
    .select()
    .table('lapa02')
    .where('l2nomeus', login.username)
    .andWhere('l2senhau', login.password)
    .first()
  if (sqlResult === undefined) {
    return false
  }
  return true
}

async function logout() {}

async function getUser(username: any): Promise<IUserDb> {
  const sqlResult: IUserDb | any = await db
    .select()
    .table('lapa02')
    .where('l2nomeus', username)
  return sqlResult
}

export { login, logout, getUser }
