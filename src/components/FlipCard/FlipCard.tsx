import CardBackImg from '../../assets/card-back.svg'
import CardFrontImg from '../../assets/card-front.svg'
import './FlipCard.css'

const FlipCard = () => {
  return (
    <div className="flip-card">
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