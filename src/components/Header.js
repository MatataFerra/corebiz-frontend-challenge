import React from 'react'
import { Dots } from './Dots'

export const Header = () => {
  return (
    <section className="header-container">
      <div className="header-title-container">
        <div className="header-titles">
          <h2>¡Hola! ¿Qué es lo que buscas?</h2>
          <h1>Crear o migrar tu comercio electrónico?</h1>
        </div>
        <div className="dot-container">
          <Dots initState={true} />
          <Dots initState={false}/>
          <Dots initState={false}/>
          <Dots initState={false}/>
        </div>
      </div>
    </section>
  )
}
