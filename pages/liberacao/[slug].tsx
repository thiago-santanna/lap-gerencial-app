import styles from '../../styles/liberacao-slug.module.css'
import Seo from '../components/seo'
import Image from 'next/image'
import imgDanied from '../../public/denied.png'
import imgaccepted from '../../public/accepted.png'

export default function Liberacao() {
  return (
    <div className={styles.container}>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />
      <header className={styles.BackgroundLiberacao}>
        <div className={styles.containerHeader}>
          <div className={styles.setorEsqHeader}>
            <p>Data do pedido:</p>
            <p className={styles.dados}>02/06/2022 11:44:58</p>
            <p>Usuário que enviou:</p>
            <p className={styles.dados}>ATE</p>
          </div>
          <div className={styles.setorDirHeader}>
            <p>Vendedor da Venda/OS:</p>
            <p className={styles.dados}>JUAN</p>
            <p>Valor da Venda/OS:</p>
            <p className={styles.dados}>20,00</p>
          </div>
        </div>
        <div className={styles.bodyHeader}>
          <span>Status:</span>
          <span className={styles.dados}>PENDENTE</span>
          <span>ID: 8167</span>
        </div>
      </header>

      <main className='w-full flex-grow p-2'>
        <p>Liberacao main</p>
      </main>

      <footer className={styles.containerFooter}>
        <div className={styles.itemsFooter}>
          <input
            className='p-2'
            type='text'
            name='user'
            id='user'
            placeholder='Usuário LAP'
          />
          <div className={styles.itemsGridFooter}>
            <Image
              src={imgaccepted}
              alt='Imagem liberado'
              layout='fixed'
              height={24}
              width={24}
            />
            <button className='px-2 py-1 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Liberar
            </button>
          </div>
        </div>
        <div className={styles.itemsFooter}>
          <input
            className='p-2'
            type='password'
            name='password'
            id='password'
            placeholder='Senha LAP'
          />
          <div className={styles.itemsGridFooter}>
            <Image
              src={imgDanied}
              alt='Imagem liberado'
              layout='fixed'
              height={24}
              width={24}
            />
            <button className='px-2 py-1 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Negar
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
