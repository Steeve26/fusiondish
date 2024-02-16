import React from 'react'
import styles from '../pages/home.module.css'
import food1 from '../assets/food1.png'
import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
import food5 from '../assets/food5.png'
import food6 from '../assets/food6.png'
import food7 from '../assets/food7.png'
import food8 from '../assets/food8.png'
import food9 from '../assets/food9.png'
import { FaShoppingCart } from "react-icons/fa";

export default function home() {
  function getRandomNumber(rating) {
    return rating ? (Math.random() * (4.1 - 1 + 1) + 1).toFixed(1) : Math.floor(Math.random() * (48 - 18 + 1)) + 18
  }

  return (
    <main className={styles.main}>
      <div className={styles.heroHeader}>
        <h1>Steak Frites</h1>
        <p>New York strip steak, which is a cut of beef from the short loin. 
          It is known for its rich flavor and tenderness. 
          The french fries are thicc, deep-fried, and marinated. </p>

        <div className={styles.mealAction}>
          <span className={styles.price}>$50</span>
          <button className={styles.cta}>Order Now</button>
        </div>
      </div>

      <div className={styles.carousel}>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food1} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>steak Frites</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food2} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>grilled pork</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food3} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>Spaghetti</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food4} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>Filet mignon</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food5} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>Chicken teriyaki</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food6} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>rib eye</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food7} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>beef stir fry</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food8} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>roasted chicken</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.topHalf}>
            <img src={food9} alt="food" />
            <span className={styles.foodPrice}>${getRandomNumber()}</span>
          </div>
          <div className={styles.bottomHalf}>
            <h3>Beetroot gnocchi</h3>
            <p>per plate</p>
            
            <div className={styles.infoAction}>
              <span>{getRandomNumber(true)}</span>
              <button><FaShoppingCart color='inherit' size={19}/></button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
