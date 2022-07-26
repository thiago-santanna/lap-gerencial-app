import { db } from '../providers/db'
import { ILiberacaoItem } from '../types/liberacao-item'

async function buscarLiberacoes(): Promise<ILiberacaoItem[]> {
  const liberacoes = await db
    .select()
    .table('lapa03')
    .whereIn('l3codemp', ['NSD', 'IF4'])
    .orderBy('l3dathor', 'desc')
    .limit(100)

  const liberacoesTransformadas = liberacoes.map((liberacao) => {
    let status = ''
    if (liberacao.l3negusu) {
      status = 'rejected'
    }
    if (liberacao.l3csenha) {
      status = 'accepted'
    }

    const tempLiberacao: ILiberacaoItem = {
      status: status,
      id: liberacao.l3numero,
      codigoEmpresa: liberacao.l3codemp,
      usuarioPedido: liberacao.l3usuari,
      vendedor: liberacao.l3vended,
      dataPedido: liberacao.l3dathor,
      cliente: {
        id: liberacao.l3codcli != undefined ? liberacao.l3codcli : '',
        nome: liberacao.l3nomcli != undefined ? liberacao.l3nomcli : '',
      },
      valor: liberacao.l3valorv,
      gerente: {
        nome: liberacao.l3gerent != null ? liberacao.l3gerent : '',
        senha: liberacao.l3csenha != undefined ? liberacao.l3csenha : '',
      },
      motivoDoBloqueio: liberacao.l3restri,
      itensVenda: liberacao.l3itemve,
      formaDePagamento: liberacao.l3formvd,
    }

    return tempLiberacao
  })
  console.log(liberacoesTransformadas)
  return liberacoesTransformadas
}
async function liberarOuNegar(): Promise<any> {}

export { buscarLiberacoes, liberarOuNegar }
