"use client";
import dynamic from 'next/dynamic'
import React from 'react'
const InteriorDesign = dynamic(()=> import("../../../components/Courses/CoursePages/NonITCourses/InteriorDesign.jsx"), {ssr:false});

const page = () => {
  return (
   <>
   <InteriorDesign/>
    
   </>
  )
}

export default page
