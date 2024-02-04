import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';


 export const openCartItemContext = React.createContext();
const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <openCartItemContext.Provider value={{ showCartHandler }}>
          <Header />
        </openCartItemContext.Provider>
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
}

export default App