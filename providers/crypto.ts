import { hashSync, compareSync } from 'bcrypt'
import { PropsCheckUser } from '../types/crypt'

const saltRounds = 10

export async function encryptPasswordUser(password: string): Promise<string> {
  const hash = hashSync(password, saltRounds)
  return hash
}

export async function checkUser({
  password,
  passwordHash,
}: PropsCheckUser): Promise<boolean> {
  const match = compareSync(password, passwordHash)
  if (match) {
    return true
  }
  return false
}
