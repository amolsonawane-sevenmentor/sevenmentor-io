"use client";
import dynamic from 'next/dynamic'
const PlacementPolicy = dynamic(()=> import('../../../components/PlacementPolicy/PlacementPolicy.jsx'), {ssr:false});


const Page = () => {
  return (
      <PlacementPolicy/>
)
}

export default Page
