import React, { useState, useEffect } from 'react'
import CardBackImg from '../../assets/card-back.svg'
import CardFrontImg from '../../assets/card-front.svg'
import './FlipCard.css'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Alternar el estado de la carta en cada scroll
      setIsFlipped(prevState => !prevState)
    }

    // Añadir el event listener de scroll
    window.addEventListener('scroll', handleScroll)

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
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