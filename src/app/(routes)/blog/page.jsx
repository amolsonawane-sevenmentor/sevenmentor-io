"use client";
import dynamic from 'next/dynamic'
const BlogPage = dynamic(()=> import('../../../components/Blogs/BlogPage.jsx'), {ssr:false});
import React from 'react'

const page = () => {
  return (
   <BlogPage/>
  )
}

export default page
