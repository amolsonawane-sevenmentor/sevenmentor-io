"use client";
import dynamic from 'next/dynamic'
const Testimonial = dynamic(() => import('../../../components/Testimonial/Testimonial.jsx'))
import React from 'react'

const page = () => {
  return (
   <>
    <Testimonial/>
   </>
  )
}

export default page
