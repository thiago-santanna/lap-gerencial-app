import Head from 'next/head'

interface Props {
  title: string
  description: string
}

const Seo = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
    </>
  )
}

export default Seo
