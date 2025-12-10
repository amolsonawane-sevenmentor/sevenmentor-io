"use client";
import dynamic from 'next/dynamic'
const Fashion = dynamic(()=> import('../../../components/Courses/CoursePages/NonITCourses/Fashion.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <>
    <Fashion/>
   </>
  )
}

export default page
