import styles from '../../styles/liberacao-slug.module.css'
import Seo from '../components/seo'
import Image from 'next/image'
import imgDanied from '../../public/denied.png'
import imgaccepted from '../../public/accepted.png'
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from '../../providers/axios'
import { ILiberacaoItem } from '../../types/liberacao-item'

interface IObservacao {
  name: string
}

export default function Liberacao(props: any): ReactElement {
  const [liberacoes, setLiberacoes] = useState<ILiberacaoItem[]>([
    {
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
    },
  ])

  const [observacao, setObservacao] = useState('')

  const { query } = useRouter()
  const router = useRouter()
  let paramId: string | string[] | undefined

  async function getCredentials(): Promise<void> {
    const credentials = sessionStorage.getItem('sessionUser')
    if (!credentials) {
      router.push('/')
    } else {
      paramId = query.id
    }
  }

  useEffect(() => {
    async function checkUser() {
      console.log('Checking user')
      await getCredentials()
    }
    checkUser()
    paramId &&
      axios
        .get('/liberacoes', { params: { id: paramId } })
        .then((response) => {
          console.log('axios')
          const liberacoes: ILiberacaoItem[] = response.data
          setLiberacoes(liberacoes)
          setObservacao(liberacoes[0].motivoDoBloqueio)
        })
        .catch((error) => {})
  }, [paramId])

  function statusLeberacao(status: string) {
    if (status === 'accepted') return 'LIBERADO'
    if (status === 'rejected') return 'NEGADO'
    return 'PENDENTE'
  }

  function handleChangeObservacion(field: string) {
    if (field === 'motivoDoBloqueio') {
      setObservacao(liberacoes[0].motivoDoBloqueio)
    }
    if (field === 'itensVenda') {
      setObservacao(liberacoes[0].itensVenda)
    }
    if (field === 'formaDePagamento') {
      setObservacao(liberacoes[0].formaDePagamento)
    }
  }

  return (
    <div className={styles.container}>
      <Seo title='Liberação' description='Detalhes da liberação' />
      <header className={styles.BackgroundLiberacao}>
        <div className={styles.containerHeader}>
          <div className={styles.setorEsqHeader}>
            <p>Data do pedido:</p>
            <p className={styles.dados}>{liberacoes[0].dataPedido}</p>
            <p>Usuário que enviou:</p>
            <p className={styles.dados}>{liberacoes[0].usuarioPedido}</p>
          </div>
          <div className={styles.setorDirHeader}>
            <p>Vendedor:</p>
            <p className={styles.dados}>{liberacoes[0].vendedor}</p>
            <p>Valor:</p>
            <p className={styles.dados}>{liberacoes[0].valor}</p>
          </div>
        </div>
        <div className={styles.bodyHeader}>
          <span>Status:</span>
          <span className={styles.status}>
            {statusLeberacao(liberacoes[0].status)}
          </span>
          <span>ID: {liberacoes[0].id}</span>
        </div>
      </header>

      <div className='text-center font-bold text-xl flex justify-around'>
        <span>{liberacoes[0].cliente?.id}</span>
        <span>{liberacoes[0].cliente?.nome}</span>
      </div>

      <main className={styles.containerMain}>
        <div className={styles.contentMenu}>
          <button
            onClick={() => handleChangeObservacion('motivoDoBloqueio')}
            className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-1 focus:bg-blue-800 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
          >
            BLOQUEIOS
          </button>
          <button
            onClick={() => handleChangeObservacion('itensVenda')}
            className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-800 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
          >
            ITENS
          </button>
          <button
            onClick={() => handleChangeObservacion('formaDePagamento')}
            className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-800 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
          >
            FORMA PGT
          </button>
        </div>
        <div className={styles.contentMsg}>
          <p>{observacao}</p>
        </div>
      </main>

      <div className='text-center font-bold text-xl'>
        <span>20/07/2022 15:44:05</span>
      </div>

      <footer className={styles.containerFooter}>
        <div className={styles.itemsFooter}>
          <input
            className='p-2 border-2 border-blue-900 rounded-lg'
            type='text'
            name='user'
            id='user'
            placeholder='Usuário LAP'
          />
          <div className={styles.itemsGridFooter}>
            <button className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              <i className={styles.icons}>
                <Image
                  src={imgaccepted}
                  alt='Imagem liberado'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </i>
              Liberar
            </button>
          </div>
        </div>
        <div className={styles.itemsFooter}>
          <input
            className='p-2 border-2 border-blue-900 rounded-lg'
            type='password'
            name='password'
            id='password'
            placeholder='Senha LAP'
          />
          <div className={styles.itemsGridFooter}>
            <button className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              <i className={styles.icons}>
                <Image
                  src={imgDanied}
                  alt='Imagem liberado'
                  layout='fixed'
                  height={24}
                  width={24}
                />
              </i>
              Negar
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
