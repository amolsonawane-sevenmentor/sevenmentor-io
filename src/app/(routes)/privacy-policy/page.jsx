"use client";
import dynamic from 'next/dynamic'
const PrivacyPolicy = dynamic(()=> import('../../../components/Privacy/PrivacyPolicy'), {ssr:false});


const Page = () => {
  return (
      <PrivacyPolicy/>
)
}

export default Page
