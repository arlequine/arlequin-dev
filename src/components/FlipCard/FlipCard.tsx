import { useState, useEffect, useRef } from 'react'
import CardBackImg from '../../assets/card-back.svg'
import CardFrontImg from '../../assets/card-front.svg'
import './FlipCard.css'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return

      // Obtener la posición del elemento en la ventana
      const rect = cardRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calcular cuando la tarjeta está en el 50% de la ventana
      const isHalfVisible = 
        rect.top <= windowHeight / 2 && 
        rect.bottom >= windowHeight / 2

      // Voltear la tarjeta cuando esté en el 50% de la ventana
      if (isHalfVisible) {
        setIsFlipped(true)
      }

      // Volver a voltear si se está al inicio de la página
      if (window.scrollY === 0) {
        setIsFlipped(false)
      }
    }

    // Añadir el event listener de scroll
    window.addEventListener('scroll', handleScroll)

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={CardBackImg} alt="Back-Card" />
        </div>
        <div className="flip-card-back">
          <img src={CardFrontImg} alt="Front-Card" />
        </div>
      </div>
    </div>
  )
}

export default FlipCard