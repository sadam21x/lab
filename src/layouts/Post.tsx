import MainLayout from '@/layouts/Main'

type Props = {
  title: string
  children: React.ReactNode
}

const PostLayout = (props: Props): JSX.Element => {
  const meta = {
    title: props.title,
  }

  return (
    <MainLayout meta={meta}>
      <h1 className='font-bold text-xl lg:text-2xl'>{props.title}</h1>
      <hr className='mt-4 mb-8' />

      <div className='prose max-w-none'>{props.children}</div>
    </MainLayout>
  )
}

export default PostLayout
