import { db } from '../providers/db'
import { IUser, IFieldsLogin, IUserDb } from '../types/usuario'

async function login(login: IUser, fields: IFieldsLogin): Promise<Boolean> {
  const sqlResult: IUserDb = await db
    .select()
    .table('lapa02')
    .where(fields.username, login.username)
    .andWhere(fields.password, login.password)
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
