import Styles from "./Card.module.scss"

const Card = ({children ,cardClass}) => {
  return (
    <div className={`${Styles.card} ${cardClass}`}>{children}
    
    </div>
  )
}

export default Card