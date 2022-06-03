import { NextPage } from 'next'
import Seo from '../components/seo'

const Desbloqueio: NextPage = () => {
  return (
    <>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />

      <main className='w-full flex-grow p-6'>
        <p>Desbloqueio</p>
      </main>
    </>
  )
}

export default Desbloqueio
