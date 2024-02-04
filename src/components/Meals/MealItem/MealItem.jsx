import React, { useContext, useRef, useState } from 'react'
import CartContext from '../../../store/Cart-Context'

import classes from './MealItem.module.css'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = () => {
   const enteredAmount = amountInputRef.current.value
   const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false)
      return
    }

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price
    });
  }
  return (
    <li>
      <div className={classes.desc}>
        <div className={classes.desc__name}>{props.name}</div>
        <p className={classes.desc__note}>{props.description}</p>
        <div className={classes.desc__price}>{`$${props.price.toFixed(2)}`}</div>
      </div>

      <div className={classes["amount-btn"]}>
        <span>Amount</span>
        <span>
          <input type="number" min="1" max='5' ref={amountInputRef} />
        </span>
        <button type='submit' onClick={submitHandler}>+Add</button>
      </div>
      {!amountIsValid ? <p>Please enter a valid amount (1-5)</p> : ''}
    </li>
  );
}

export default MealItem