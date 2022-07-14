import { NextPage } from 'next'
import Seo from '../components/seo'
import styles from '../../styles/liberacao.module.css'
import LiberacaoItem from '../components/liberacao-item/index'

const Liberacao: NextPage = () => {
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

        <div>
          <LiberacaoItem />
          <LiberacaoItem />
          <LiberacaoItem />
          <LiberacaoItem />
        </div>
      </main>
    </>
  )
}

export default Liberacao
