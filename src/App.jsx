import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DermatologyBilling from './components/Dermatology Billing /DermatologyBilling'
import InternalMedicienBilling from './Pages/InternalMedicienBilling'
import NephrologyBillingServices from './components/NephrologyBilling /NephrologyBillingServices'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <InternalMedicienBilling />
    <DermatologyBilling />
    <NephrologyBillingServices />
        </>
  )
}

export default App
