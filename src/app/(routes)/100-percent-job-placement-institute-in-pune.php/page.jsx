"use client";
import dynamic from "next/dynamic";

const PlacementPage = dynamic(()=>  import('../../../components/Placement/PlacementPage'), {ssr:false});

const page = () => {
  return (
   <>
    <PlacementPage/>
   </>
  )
}

export default page