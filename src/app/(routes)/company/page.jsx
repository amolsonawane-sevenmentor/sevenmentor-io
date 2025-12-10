"use client";
import dynamic from 'next/dynamic'
const About = dynamic(()=> import('../../../components/AboutUs/About.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
    <>
      <About/>
    </>
  )
}

export default page
