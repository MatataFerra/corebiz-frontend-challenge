import React from 'react'

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2>¡Únete a nuestras novedades y promociones!</h2>
      <div className="newsletter-form-container">
        <input className="newsletter-input" type="text" name="name" id="name" placeholder="Ingresa tu nombre" autoComplete="off" />
        <input className="newsletter-input" type="text" name="email" id="email" placeholder="Ingresa tu mail"  autoComplete="off" />
        <button className="newsletter-button" type="submit">Suscribirme</button>
      </div>
    </div>
  )
}
