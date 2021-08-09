import React, { useReducer } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { initialState, shoppingReducer } from './reducers/shoppingReducer';
import { CartContext } from './CartContext';

export const App = () => {
  
  const [state, dispatch] = useReducer(shoppingReducer, initialState)

  // const sessionCart = JSON.parse(localStorage.getItem('cart'));

  // if( !sessionCart ) {
  //   return localStorage.setItem('cart', JSON.stringify(state.cart));
  // }

  return (
    <CartContext.Provider value={{state, dispatch}}>
      <div>
        <Navbar />
        <Header />
        <Main />
        <Newsletter />
        <Footer />
      </div>
    </CartContext.Provider>
  )
}

// TODO: Validación de formulario

