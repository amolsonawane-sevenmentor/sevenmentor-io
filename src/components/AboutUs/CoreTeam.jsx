"use client"
import React, { useState } from 'react';
import ceo from "../../../public/assets/coreTeam/Pawan_Sir.webp";
// import cfo from "../../../public/assets/coreTeamNisha_Maam.webp";
import coo from "../../../public/assets/coreTeam/Neelam_Maam.webp";
import Image from 'next/image';
import Link from 'next/link';
function CoreTeam() {
    const teamMembers = [
        {
            name: "Pawan Bhosikar",
            role: "CEO",
            image: ceo,
            linkedIn: "https://www.linkedin.com/in/pawanbhosikar/",
            quote:
                "As the CEO of Seven Mentor, I have dedicated myself to providing top-tier education, IT and training that empowers individuals to achieve their career goals in both the IT and Non-IT sectors. With a passion for innovation and excellence, I have led the institute to become a trusted provider of quality education, offering cutting-edge courses that are in sync with the ever-evolving demands of the job market. With over 16 of experience in the education and training industry, I have witnessed firsthand the transformative power of knowledge. My mission has always been to bridge the gap between academia and the professional world, ensuring that our students are not only well-prepared but also highly employable. Additionally, my extensive experience in leading multiple IT companies and working with prominent clients, including SSAI, NASA, has provided me with a deep understanding of industry requirements and trends, which I leverage to continuously enhance our curriculum and training programs. At Seven Mentor, we understand that the key to success in today’s fast-paced world lies in continuous learning. Whether you're looking to advance your career in Information Technology, explore emerging fields, or gain expertise in a diverse range of non-technical disciplines, our courses are designed to provide both the practical skills and theoretical knowledge necessary to thrive. I take great pride in fostering a culture of excellence, where every student is supported, motivated, and given the tools they need to succeed. My ultimate goal is to help individuals unlock their full potential and create lasting impact through education. Thank you for choosing us as your partner in your learning journey.",
        },
        // {
        //     name: "Nisha Mandot",
        //     role: "CFO",
        //     image: cfo,
        //     quote:
        //         "As Chief Financial Officer (CFO) of SevenMentor, I lead the company's financial strategy, focusing on strong risk management and building lasting value. Our success is born from a relentless focus on financial prudence, seamless communication, and an unrelenting commitment to empowering learners. Through optimizing financial performance, providing actionable, data-driven insights, and supporting innovation, we foster sustainable growth and operational excellence. Collaborating closely with cross-functional teams, I maintain transparency, agility, and strategic resource utilization, creating a culture of trust and accountability. At SevenMentor, we are not just redefining standards in education but also designing a resilient, future-proof organization ready to make a lasting difference.",
        // },
        {
            name: "Neelam Lokhande",
            role: "COO",
            image: coo,
            linkedIn: "https://www.linkedin.com/",
            quote:
                'COO needs to be passionate about execution, efficiency, and leadership. I execute COO’s vision and strategy for business through operations. Our success is built on a foundation of collaboration, agility, and a customer-first mindset. By optimizing processes, empowering our teams, and leveraging cutting-edge technology, we are driving sustainable growth and setting new industry standards. Whether you’re a customer, partner, or future team member, we welcome you to join us on this journey of innovation and excellence.”',
        },
    ];

    const [expandedMember, setExpandedMember] = useState(null);

    const toggleQuote = (name) => {
        setExpandedMember(expandedMember === name ? null : name);
    };

    return (
        <section className="py-4 px-4 bg-black">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-orange-500">Our Core Team</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-48">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="bg-gradient-to-br from-black via-black/95 to-orange-500/20 rounded-lg shadow-lg p-6"
                        >
                            <div className="relative mb-6 flex justify-center items-center">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    height={400}
                                    width={300}
                                    className="object-cover rounded-lg w-[350px] md:w-full h-[300px]"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-100">{member.name} <span className="text-gray-400 !text-xl">({member.role})</span></h3>
                                </div>
                                <Link
                                    href={member.linkedIn}
                                    target="_blank"
                                    className="text-blue-500 hover:text-blue-400 transition-colors"
                                    aria-label={`${member.name}'s LinkedIn profile`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.294 20h-3.412v-11.412h3.412v11.412zm-1.706-13.059c-1.096 0-1.765-.797-1.765-1.765 0-.969.698-1.765 1.813-1.765 1.115 0 1.765.796 1.765 1.765 0 .969-.679 1.765-1.813 1.765zm14.294 13.059h-3.412v-6.49c0-1.549-.553-2.604-1.882-2.604-1.025 0-1.637.692-1.906 1.362-.098.234-.123.561-.123.889v6.843h-3.412s.045-11.111 0-12.244h3.412v1.734c.452-.698 1.263-1.693 3.072-1.693 2.242 0 3.851 1.462 3.851 4.607v7.596z" />
                                    </svg>
                                </Link>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {expandedMember === member.name ? member.quote : `${member.quote.substring(0, 300)}...`}
                                <button
                                    onClick={() => toggleQuote(member.name)}
                                    className="text-orange-500 hover:text-orange-400 transition-colors ml-2"
                                >
                                    {expandedMember === member.name ? "Read Less" : "Read More"}
                                </button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreTeam;