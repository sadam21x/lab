import { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    window.pageYOffset > 100 ? setIsVisible(true) : setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } tooltip tooltip-left fixed bottom-8 right-4 cursor-pointer lg:bottom-6 lg:right-8`}
      data-tip='Scroll to top'
      onClick={scrollToTop}>
      <FaArrowCircleUp className='w-8 h-auto lg:w-10' />
    </div>
  )
}

export default ScrollToTop
