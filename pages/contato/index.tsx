import { NextPage } from 'next'
import Seo from '../components/seo'

const Contato: NextPage = () => {
  return (
    <>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />
      <main className='w-full flex-grow p-6'>
        <p>Contato</p>
      </main>
    </>
  )
}

export default Contato
