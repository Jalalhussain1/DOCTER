import React from 'react'
import InternalMedicien from '../components/InternalMedicienBilling/InternalMedicien'
import ConsultationSection from '../components/InternalMedicienBilling/ConsultationSection'
import ChallengesSection from '../components/InternalMedicienBilling/ChallengesSection'
import BillingProcess from '../components/InternalMedicienBilling/BillingProcess'
import BillingFeatures from '../components/InternalMedicienBilling/BillingFeatures'
import FinancialBenefits from '../components/InternalMedicienBilling/ FinancialBenefits'


const InternalMedicienBilling = () => {
  return (
    <>
     <InternalMedicien />
     <ConsultationSection />
     <FinancialBenefits />
     <BillingFeatures />
     <ChallengesSection />
     <BillingProcess />
    </>
  )
}

export default InternalMedicienBilling