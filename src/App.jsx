import { useState } from 'react'
import Welcome from './components/welcome'
import FounderCard from './components/founderCard'
import ServiceCards from './components/serviceCards'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      <FounderCard />
      <ServiceCards />
    </>
  )
}

export default App
