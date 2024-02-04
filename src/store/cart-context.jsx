import React from "react"

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemFromCartHandler: () => {},
  removeItemFromCartHandler: () => {},
  clearCart: () => {}
})

export default CartContext