import { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import css from './styles.module.scss'

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
      className={`${css.button} ${
        isVisible && css.visible
      } tooltip tooltip-left`}
      data-tip='Scroll to top'
      onClick={scrollToTop}>
      <FaArrowCircleUp className={css.icon} />
    </div>
  )
}

export default ScrollToTop
