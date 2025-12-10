"use client";
import dynamic from 'next/dynamic'
const ContactUs = dynamic(()=> import('../../../components/ContactUs/ContactUs'), {ssr:false});
import React from 'react'


const page = () => {
  return (
   <>
    <ContactUs/>
   </>
  )
}

export default page
