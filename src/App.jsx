import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Specialties from './components/Specialties/Specialties'
import DermatologyBilling from './components/Dermatology Billing /DermatologyBilling'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Specialties />
    <DermatologyBilling />
        </>
  )
}

export default App
