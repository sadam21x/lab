import Head from 'next/head'

type Props = {
  children: React.ReactNode
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

function ErrorLayout(props: Props) {
  const title = props.meta?.title ? props.meta.title : 'Sadam LAB'
  const description = props.meta?.description || "Sadam's personal website"
  const keywords =
    props.meta?.keywords ||
    'Sadam, Software Engineer, Web Developer, Cloud, Bali, Indonesia'

  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>

      {props.children}
    </>
  )
}

export default ErrorLayout
