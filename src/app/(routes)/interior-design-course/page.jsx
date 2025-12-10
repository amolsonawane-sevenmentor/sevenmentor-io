"use client";
import dynamic from 'next/dynamic'
import React from 'react'
const GlobalInterior = dynamic(()=> import("../../../components/Courses/CoursePages/NonITCourses/GlobalInterior.jsx"), {ssr:false});

const page = () => {
  return (
   <>
   <GlobalInterior/>
    
   </>
  )
}

export default page
