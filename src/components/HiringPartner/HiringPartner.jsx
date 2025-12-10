import React from 'react'
import HiringPartnerBanner from './HiringPratnerBanner'
import InfiniteScrollHiring from './InfiniteScrollHirinig'
import WhyHire from './WhyHire'
import HiringCardsFlip from './HiringCardsFlip'
import HiringTestimonial from './HiringTestimonial'
import HiringPartnerForm from '../Forms/HiringPartnerForm.jsx'
import StickyButton from '../StickyButton/StickyButton.jsx'

function HiringPartner() {
  return (
    <div>
      <HiringPartnerBanner/>
      <InfiniteScrollHiring/>
      <WhyHire/>
      <HiringCardsFlip/>
      <HiringTestimonial/>
      <HiringPartnerForm/>
      <StickyButton/>  
    </div>
  )
}

export default HiringPartner
