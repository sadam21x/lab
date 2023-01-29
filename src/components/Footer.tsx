function Footer() {
  return (
    <footer className='absolute bottom-6 right-1/2 translate-x-1/2 lg:bottom-4'>
      <p className='w-max font-medium text-sm text-center lg:text-base'>
        &copy; {new Date().getFullYear()} Sadam. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
