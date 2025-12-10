"use client";
import dynamic from 'next/dynamic'
const TermsAndConditions = dynamic(()=> import('../../../components/TermsAndConditions/TermsAndConditions.jsx'), {ssr:false});
const page = () => {
  return (
    <div>
      <TermsAndConditions/>
    </div>
  )
}

export default page
