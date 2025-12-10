"use client"
import dynamic from 'next/dynamic'

const WorkShop = dynamic(() => import('../../../components/WorkShop/WorkShop'), {
  ssr: false, // set to false if you want to disable server-side rendering
  loading: () => <p>Loading...</p>, // optional loading component
})

function page() {
  return (
   <>
   <WorkShop/>
   </>
  )
}

export default page