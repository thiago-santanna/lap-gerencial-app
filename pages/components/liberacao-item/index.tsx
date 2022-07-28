import Image from 'next/image'
import styles from '../../../styles/liberacao.module.css'
import imgDanied from '../../../public/denied.png'
import imgaccepted from '../../../public/accepted.png'
import imgPending from '../../../public/pending.png'
import { ILiberacaoItem } from '../../../types/liberacao-item'

import { ArrowRight } from 'react-feather'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function LiberacaoItem(props: ILiberacaoItem): ReactElement {
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
        <div className='realtive z-10 w-12 h-12 rounded-full mr-2'>
          <Image
            src={handleImageStatus()}
            alt='Imagem do usuario'
            layout='responsive'
            height={48}
            width={48}
          />
        </div>
        <div>
          <h1 className='text-base font-bold'>{props?.vendedor}</h1>
          <span>{props.dataPedido}</span>
          <h2 className='text-base font-bold'>{props.cliente?.nome}</h2>
        </div>
        <div>
          <div className='font-bold'>
            <span className='mr-1'>{props.id}</span>
            <span>{props.codigoEmpresa}</span>
          </div>
          <div>
            <span>Usuario: {props.usuarioPedido}</span>
          </div>
          <div>
            <span className='text-base font-bold'>{props.valor}</span>
          </div>
        </div>
        <div>
          <button>
            <Link href={`/liberacao/${props.id}`}>
              <a>
                <ArrowRight size={26} color='#000' className='mr-3 font-bold' />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
