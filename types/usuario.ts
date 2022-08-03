export interface IRetLogin {
  isLogged: boolean
  user: {
    username: string
    passwordhashed: string
  }
  empresas: [
    {
      id: string
      codigoEmpresa: string
      name: string
    }
  ]
}

export interface IUser {
  username: string
  password: string
}

export interface IFieldsLogin {
  username: string
  password: string
}

export interface IUserDb {
  l2uemail: string
  l2senhaw: string
  l2nomeus: string
  l2senhau: string
  l2idusuar: number
  l2idempr: number
}
