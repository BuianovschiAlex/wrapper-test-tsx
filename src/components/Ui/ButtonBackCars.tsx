import { Link } from 'react-router-dom'
import backArrow from './img/backArrow.png'
import styles from './ButtonBackCars.module.scss'

export const ButtonBackCars = () => {
  return (
    <Link to='/cars'>
      <button className={styles.buttonBack}>
        <img className={styles.img} src={backArrow} />
      </button>
    </Link>
  )
}
