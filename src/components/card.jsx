import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import styles from '../pages/home.module.css'

export default function card(data) {

  return (
      <div className={styles.cards}>
        <div className={styles.topHalf}>
          <img src={data.imageSrc} alt="food" />
          <span className={styles.foodPrice}>${data.price}</span>
        </div>
        <div className={styles.bottomHalf}>
          <h3>{data.title}</h3>
          <p>per plate</p>

          <div className={styles.infoAction}>
            <span>{data.rating}</span>
            <button><FaShoppingCart color='inherit' size={19}/></button>
          </div>
        </div>
      </div> 
    )
}
