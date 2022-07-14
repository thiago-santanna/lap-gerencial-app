import Image from 'next/image'
import styles from '../../../styles/liberacao.module.css'

export default function LiberacaoItem() {
  return (
    <>
      <div className={styles.containerItem}>
        <div className='realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'>
          <Image
            src={'/user.jpeg'}
            alt='Imagem do usuario'
            layout='responsive'
            height={48}
            width={48}
          />
        </div>
        <div>
          <h1>DIEGO</h1>
          <span>02/06/2022 15:08:26</span>
          <h2>ORLANDO</h2>
        </div>
        <div>
          <div>
            <span>8170</span>
            <span>IF4</span>
          </div>
          <div>
            <span>Usuario: ATE</span>
          </div>
          <div>
            <span>125,00</span>
          </div>
        </div>
      </div>
    </>
  )
}
