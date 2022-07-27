import { db } from '../providers/db'
import { ILiberacaoItem } from '../types/liberacao-item'
import { formatLocalDate } from '../providers/formatDate'

async function buscarLiberacoes(id?: string): Promise<ILiberacaoItem[]> {
  let liberacoes = []

  if (id) {
    liberacoes = await db
      .select()
      .table('lapa03')
      .where('l3numero', id)
      .orderBy('l3dathor', 'desc')
      .limit(1)
  } else {
    liberacoes = await db
      .select()
      .table('lapa03')
      .whereIn('l3codemp', ['NSD', 'IF4'])
      .orderBy('l3dathor', 'desc')
      .limit(1)
  }

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
      dataPedido: formatLocalDate(liberacao.l3dathor, 'dd/MM/yyyy hh:mm:ss'),
      cliente: {
        id: liberacao.l3codcli,
        nome: liberacao.l3nomcli,
      },
      valor: liberacao.l3valorv,
      gerente: {
        nome: liberacao.l3gerent,
        senha: liberacao.l3csenha,
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
