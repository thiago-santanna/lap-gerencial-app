import { NextPage } from 'next'
import Seo from '../components/seo'
import styles from '../../styles/liberacao.module.css'
import LiberacaoItem from '../components/liberacao-item/index'
import { useState } from 'react'
import { ILiberacaoItem } from '../../types/liberacao-item'

const Liberacao: NextPage = () => {
  const [liberacao, setLiberacao] = useState<ILiberacaoItem>({
    status: undefined,
    nomeCliente: 'DIEGO',
    dataHoraVenda: '02/06/2022 12:22:12',
    vendedor: 'ORLANDO',
    codUsuario: 'ATE',
    empresas: 'IF4',
    idLiberacao: '247',
    valor: 125.0,
  })

  return (
    <>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />
      <main className='w-full flex-grow p-2'>
        {/* cada botao tera uma acao disparando uma funcao que retornara dados' */}
        <div className={styles.containerBtn}>
          <button
            title='Selecionar os pedidos pendentes'
            className={styles.btnMenu}
            // style={{ borderColor: '#D70000' }}
          >
            Pendentes
          </button>
          <button
            title='Selecionar os pedidos liberados'
            className={styles.btnMenu}
          >
            Liberados
          </button>
          <button
            title='Selecionar os pedidos negados'
            className={styles.btnMenu}
          >
            Negados
          </button>
          <button
            title='Selecionar todos pedidos( max. 100 )'
            className={styles.btnMenu}
          >
            Todos
          </button>
        </div>

        <div className={styles.itensLiberacao}>
          <LiberacaoItem {...liberacao} />
          <LiberacaoItem
            status={'rejected'}
            nomeCliente={'Thiago'}
            dataHoraVenda={'02/01/2014 01:00:00'}
            vendedor={'DIMAS'}
            codUsuario={'ADR'}
            empresas={'LAP'}
            idLiberacao={'1020'}
            valor={100}
          />
          <LiberacaoItem
            status={'accepted'}
            nomeCliente={'Thiago'}
            dataHoraVenda={'02/01/2014 01:00:00'}
            vendedor={'DIMAS'}
            codUsuario={'ADR'}
            empresas={'LAP'}
            idLiberacao={'1020'}
            valor={100}
          />
          <LiberacaoItem {...liberacao} />
          <LiberacaoItem {...liberacao} />
          <LiberacaoItem {...liberacao} />
          <LiberacaoItem {...liberacao} />
        </div>
      </main>
    </>
  )
}

export default Liberacao
