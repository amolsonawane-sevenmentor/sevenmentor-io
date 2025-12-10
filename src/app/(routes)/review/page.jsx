"use client";
import dynamic from 'next/dynamic'
const Review = dynamic(()=> import("../../../components/Review/Review"), {ssr:false});

export default function Contact() {
    return (
      <>
      <Review />
      </>
    )
  }
  