"use client";
import dynamic from 'next/dynamic'
const FreePaidCoursePage = dynamic(()=> import('../../../components/FreePaidCourses/FreePaidCourses/FreePaidCoursePage.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <>
    <FreePaidCoursePage/>
   </>
  )
}

export default page
