"use client";
import dynamic from 'next/dynamic'
const HiringPartner = dynamic(()=> import('../../../components/HiringPartner/HiringPartner'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <>
    <HiringPartner/>
   </>
  )
}

export default page
