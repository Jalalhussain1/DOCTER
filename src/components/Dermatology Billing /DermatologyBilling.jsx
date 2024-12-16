import React from 'react'
import DermatologyBillingServices from './DermatologyBillingServices'
import BillingBetter from './ BillingBetter'
import CodingProficiency from './CodingProficiency'
import GetStarted from './GetStarted'
import ChallengesSection from './ChallengesSection'
import ConsultationSection from './ConsultationSection'
import BillingProcess from './ BillingProcess'
const DermatologyBilling = () => {
  return (
    <div>
        <DermatologyBillingServices />
        <BillingBetter />
        <CodingProficiency />
        <GetStarted />
        <ChallengesSection />
        <ConsultationSection />
        <BillingProcess/>
    </div>
  )
}

export default DermatologyBilling