import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Investors from './components/Investors'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Investors />
      </main>
    </>
  )
}

export default App
