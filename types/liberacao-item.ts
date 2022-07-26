interface Cliente {
  id?: string
  nome: string
}

interface Gerente {
  nome: string
  senha?: string
}

export interface ILiberacaoItem {
  status: 'accepted' | 'rejected' | undefined
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
