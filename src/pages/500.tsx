import Layout from '@/layouts/Error'

export default function Custom500() {
  const meta = {
    title: '500 - Internal Error',
  }

  return (
    <Layout meta={meta}>
      <div className='h-screen flex flex-col items-center justify-center text-center p-8'>
        <h1 className='text-2xl font-bold md:text-4xl'>500 - Internal Error</h1>
        
        <p className='text-sm font-semibold mt-2 md:text-lg md:mt-4'>
          We are sorry, but something went wrong
        </p>
      </div>
    </Layout>
  )
}
