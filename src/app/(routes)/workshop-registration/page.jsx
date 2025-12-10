"use client"
import dynamic from 'next/dynamic'

const Registration = dynamic(() => import('../../../components/WorkShop/Registration'), {
  ssr: false, // Disable SSR if the component depends on the browser (optional)
  loading: () => <p>Loading...</p>, // Optional loading placeholder
})

function page() {
  return (
   <>
   <Registration/>
   </>
  )
}

export default page