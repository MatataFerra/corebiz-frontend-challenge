import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  )
}

// TODO: Validación de formulario
// TODO: Número de puntuación

