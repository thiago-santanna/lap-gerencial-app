import { db } from '../providers/db'
import { IUser, IFieldsLogin, IUserDb, IRetLogin } from '../types/usuario'
import { encryptPasswordUser } from '../providers/crypto'

async function login(login: IUser, fields: IFieldsLogin): Promise<IRetLogin> {
  const sqlResult: IUserDb = await db
    .select()
    .table('lapa02')
    .where(fields.username, login.username)
    .andWhere(fields.password, login.password)
    .first()
  if (sqlResult === undefined) {
    return {
      isLogged: false,
      user: {
        username: login.username,
        passwordhashed: login.password,
      },
    }
  }

  const passEncrypted = await encryptPasswordUser(login.password)
  console.log(passEncrypted)

  return {
    isLogged: true,
    user: {
      username: login.username,
      passwordhashed: passEncrypted,
    },
  }
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
