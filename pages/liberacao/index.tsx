import Seo from '../components/seo'
import styles from '../../styles/liberacao.module.css'
import LiberacaoItem from '../components/liberacao-item/index'
import { ReactElement, useState } from 'react'
import { ILiberacaoItem } from '../../types/liberacao-item'

export default function Liberacoes(): ReactElement {
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
      <main className='max-w-4xl flex-grow p-2 container mx-auto'>
        {/* cada botao tera uma acao disparando uma funcao que retornara dados' */}
        <div className={styles.containerBtn}>
          <button
            title='Selecionar os pedidos pendentes'
            className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            // style={{ borderColor: '#D70000' }}
          >
            Pendentes
          </button>
          <div>
            <button
              title='Selecionar os pedidos liberados'
              className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            >
              Liberados
            </button>
            <button
              title='Selecionar os pedidos negados'
              className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              // className={styles.btnMenu}
            >
              Negados
            </button>
            <button
              title='Selecionar todos pedidos( max. 100 )'
              className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
            >
              Todos
            </button>
          </div>
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
            idLiberacao={'1030'}
            valor={100}
          />
        </div>
      </main>
    </>
  )
}
