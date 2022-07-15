import Image, { StaticImageData } from 'next/image'
import styles from '../../../styles/liberacao.module.css'
import imgDanied from '../../../public/denied.png'
import imgaccepted from '../../../public/accepted.png'
import imgPending from '../../../public/pending.png'
import { ILiberacaoItem } from '../../../types/liberacao-item'

import { ArrowRight } from 'react-feather'

export default function LiberacaoItem(props: ILiberacaoItem) {
  function handleImageStatus() {
    if (props.status === 'rejected') {
      return imgDanied
    }

    if (props.status === 'accepted') {
      return imgaccepted
    }

    return imgPending
  }

  return (
    <>
      <div className={styles.containerItem}>
        <div className='realtive z-10 w-12 h-12 rounded-full'>
          <Image
            src={handleImageStatus()}
            alt='Imagem do usuario'
            layout='responsive'
            height={48}
            width={48}
          />
        </div>
        <div>
          <h1 className='text-lg font-bold'>DIEGO</h1>
          <span>02/06/2022 15:08:26</span>
          <h2 className='text-lg font-bold'>ORLANDO</h2>
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
            <span className='text-lg font-bold'>125,00</span>
          </div>
        </div>
        <div>
          <button>
            <ArrowRight size={20} color='#000' className='mr-3' />
          </button>
        </div>
      </div>
    </>
  )
}
