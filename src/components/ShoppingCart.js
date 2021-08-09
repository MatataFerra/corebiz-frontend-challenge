import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

export const ShoppingCart = () => {
  const { state } = useContext(CartContext)

  return (
    <div className="navbar-cart-number"><span>{ state.cart }</span></div>
  )
}
