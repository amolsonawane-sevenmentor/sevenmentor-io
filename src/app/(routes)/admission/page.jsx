"use client";
import dynamic from 'next/dynamic'
const PaymentPage = dynamic(() =>import('../../../components/PaymentPage/PaymentPage.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <PaymentPage/>
  )
}

export default page
