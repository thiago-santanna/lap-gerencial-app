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
          <span>ID:8167</span>
        </div>
      </header>

      <div className='text-center font-bold text-xl flex justify-around'>
        <span>35868</span>
        <span>ORLANDO</span>
      </div>

      <main className={styles.containerMain}>
        <div className={styles.contentMenu}>
          <button>BLOQUEIOS</button>
          <button>ITENS</button>
          <button>FORMA PGTO.</button>
        </div>
        <div className={styles.contentMsg}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium
          vel risus a viverra. Nam vitae lacus varius, aliquet erat viverra,
          sagittis arcu. Etiam euismod rhoncus gravida. Morbi finibus mi vitae
          urna fermentum mollis. Integer sit amet enim vulputate, interdum erat
          elementum, rhoncus sapien. Curabitur porta arcu nec odio vestibulum
          pellentesque id sed nunc. Nunc ultrices dui eu enim tempus, in blandit
          urna feugiat. Vivamus lorem lacus, euismod feugiat eros eu, fringilla
          faucibus erat. Duis tincidunt ullamcorper tortor sit amet vestibulum.
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
            <Image
              src={imgaccepted}
              alt='Imagem liberado'
              layout='fixed'
              height={24}
              width={24}
            />
            <button className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
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
            <Image
              src={imgDanied}
              alt='Imagem liberado'
              layout='fixed'
              height={24}
              width={24}
            />
            <button className='px-2 py-2 tracking-wide text-white text-center justify-items-center justify-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
              Negar
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
