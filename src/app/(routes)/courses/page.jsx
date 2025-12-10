"use client";
import dynamic from 'next/dynamic'
const CoursePage = dynamic(()=> import('../../../components/Courses/CoursePage'), {ssr: false});
import React from 'react'

const page = () => {
  return (
   <CoursePage/>
  )
}

export default page
