"use client";
import dynamic from 'next/dynamic'
const CertificatePage = dynamic(()=> import('../../../components/CertificatePage/CertificatePage.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
    <CertificatePage/>
  )
}

export default page
