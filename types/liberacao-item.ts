export interface ILiberacaoItem {
  status: 'accepted' | 'rejected' | undefined
  nomeCliente: string
  dataHoraVenda: string
  vendedor: string
  codUsuario: string
  empresas: string
  idLiberacao: string
  valor: number
}
