"use client"

import dynamic from "next/dynamic"

const CareersLms = dynamic(() => import("../../../components/CareersLms/CareersLms"), {
  ssr: false,
  loading: () => (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  ),
})

const page = () => {
  return <CareersLms/>
}

export default page
