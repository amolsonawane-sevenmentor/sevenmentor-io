"use client";
import dynamic from 'next/dynamic'
const FeedbackPage = dynamic(()=>  import("../../../components/FeedbackPage/FeedbackPage"), {ssr:false});
import React from 'react'
export default function Contact() {
    return (
      <FeedbackPage/>
    )
  }
