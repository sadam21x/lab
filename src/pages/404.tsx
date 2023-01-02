import Link from 'next/link'
import ErrorLayout from '@/layouts/Error'

export default function Custom404() {
  const meta = {
    title: '404 - Not Found',
  }

  return (
    <ErrorLayout meta={meta}>
      <div className='h-screen flex flex-col items-center justify-center text-center p-8'>
        <h1 className='text-2xl font-bold md:text-4xl'>404 - Not Found</h1>

        <p className='text-sm font-semibold mt-2 md:text-lg md:mt-4'>
          The page you are looking for does not exist
        </p>

        <Link
          href='/'
          className='btn btn-sm btn-outline mt-8 md:btn-md md:mt-10'>
          Back to Home
        </Link>
      </div>
    </ErrorLayout>
  )
}
