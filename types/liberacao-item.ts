interface Cliente {
  id?: string
  nome?: string
}

interface Gerente {
  nome?: string
  senha?: string
}

export interface ILiberacaoItem {
  status: string
  id: string
  codigoEmpresa: string
  usuarioPedido: string
  vendedor?: string
  dataPedido: string
  cliente: Cliente
  valor: number
  gerente: Gerente
  motivoDoBloqueio: string
  itensVenda: string
  formaDePagamento: string
}

export const initialLiberacao = {
  status: 'accepted',
  id: '',
  codigoEmpresa: '',
  usuarioPedido: '',
  vendedor: '',
  dataPedido: '',
  cliente: {
    id: '',
    nome: '',
  },
  valor: 0,
  gerente: {
    nome: '',
    senha: '',
  },
  motivoDoBloqueio: '',
  itensVenda: '',
  formaDePagamento: '',
}
