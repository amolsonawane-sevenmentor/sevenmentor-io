"use client";
import dynamic from 'next/dynamic'
const WebPolicy = dynamic(()=> import('../../../components/WebPolicy/WebPolicy'), {ssr:false});


const Page = () => {
  return (
      <WebPolicy/>
)
}

export default Page
