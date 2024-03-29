import React from 'react'

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
         <h1>HotMeals</h1>
         <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
         <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </>
  )
}

export default Header