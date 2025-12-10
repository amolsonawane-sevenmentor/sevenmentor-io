"use client";
import dynamic from 'next/dynamic'
const GlobalFashion = dynamic(()=> import('../../../components/Courses/CoursePages/NonITCourses/GlobalFashion.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <>
    <GlobalFashion/>
   </>
  )
}

export default page
