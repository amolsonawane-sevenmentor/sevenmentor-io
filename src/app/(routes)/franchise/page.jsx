"use client";
import dynamic from 'next/dynamic'
const FranchisePage = dynamic(()=> import('../../../components/Franchise/FranchisePage.jsx'), {ssr: false});

const page = () => {
  return (
   <>
    <FranchisePage/>
   </>
  )
}

export default page