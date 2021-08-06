import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="navbar-img" src="/assets/corebiz-logo.svg" alt="" />

      <div className="navbar-options-container">
        <div className="navbar-input-container">
          <input className="navbar-input" type="text" name="search" id="search" placeholder="¿Qué estás buscando?"/>
          <i className="fas fa-search navbar-ico-size"></i>
        </div>

        <div className="navbar-user-container">
          <i className="far fa-user navbar-ico-size"></i>
          <p className="navbar-user-text">Mi Cuenta</p>
        </div>

        <div className="navbar-cart-container">
          <div>
            <img className="navbar-cart navbar-ico-size" src="/assets/carrito-de-compras.svg" alt="Compras" />
          </div>
          <div className="navbar-cart-number"><span>1</span></div>
        </div>
      </div>
    
    </div>
  )
}
