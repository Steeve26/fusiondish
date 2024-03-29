import React, { useEffect, useRef, useState } from 'react'
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
import { FaFacebook, FaGithub, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom'
import Card from '../components/card'
export default function home({menu, setMenuOpen}) {
  function getRandomNumber(rating) {
    return rating ? (Math.random() * (4.1 - 1 + 1) + 1).toFixed(1) : Math.floor(Math.random() * (48 - 18 + 1)) + 18
  }

  const scrollableDivRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => { 
    if (scrollableDivRef.current) {
      const newScrollPosition = scrollPosition + (direction == "right" ? 230 : -230); 
      direction == "right" ? 
      scrollableDivRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" }) 
      : scrollableDivRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" }); 
      newScrollPosition >= 0 && newScrollPosition <=1380 && setScrollPosition(newScrollPosition); 
    }
  };

  const menuRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && event.target.className != 'menuButton' && menu) {
        setMenuOpen(false)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef, menu]);

  const cardsData = [
    {
      imageSrc: food1,
      title: "steak Frites",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food2,
      title: "grilled pork",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food3,
      title: "spaghetti",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food4,
      title: "Filet mignon",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food5,
      title: "Chicken teriyaki",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food6,
      title: "rib eye",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food7,
      title: "beef stir fry",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food8,
      title: "classic steak",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
    {
      imageSrc: food9,
      title: "Beetroot gnocchi",
      price: getRandomNumber(),
      rating: getRandomNumber(true)
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.heroHeader}>
        <h1>Steak Frites 🔥</h1>
        <p>New York strip steak, which is a cut of beef from the short loin. 
          It is known for its rich flavor and tenderness. 
          The french fries are thicc, deep-fried, and marinated. </p>

        <div className={styles.mealAction}>
          <span className={styles.price}>$50</span>
          <button className={styles.cta}>Order Now</button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={scrollableDivRef}>
          {cardsData.map( (data, index) => {return <Card key={index} {...data} />})}
        </div>

        <div className={styles.scrollButtons}>
          <button onClick={() => handleScroll('left')}><FaArrowAltCircleLeft size={25} color={!scrollPosition && 'grey'}/></button>
          <button onClick={() => handleScroll('right')}><FaArrowAltCircleLeft size={25}/></button>
        </div>
      </div>

      <div className={styles.socials}>
        <Link to="https://www.facebook.com/" target='_blank'>
            <FaFacebook size={25} color='#282828'/>
        </Link >
        <Link to="https://www.instagram.com/" target='_blank'>
            <GrInstagram size={24} color='#282828'/>
        </Link>
        <Link to="https://github.com/Steeve26" target='_blank'>
            <FaGithub size={24} color='#282828'/>
        </Link >
      </div>

      {menu && 
        <div onClick={(e) => e.stopPropagation()} className={styles.mobileMenu} ref={menuRef}>
          <button onClick={() => setMenuOpen(false)} className={styles.exit}><IoMdCloseCircleOutline size={30} color='red'/></button>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>recipes</li>
            <li>about us</li>
          </ul>
        </div>
      }
    </main>
  )
}
