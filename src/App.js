import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

