"use client";

import React from "react";

export default function AboutContent() {
  const posts = [
    {
      id: 1,
      excerpt: `<strong style='color:#f97316'>“SevenMentor”</strong> has improvised a tendency to cope with all International Standards within their courses, by engaging both ends of the industry for students, professionals, and individuals to corporate clients. The organization conjointly gives chance within their educational programs to meet the needs with projected desires of quick developing networking trade.`,
    },
    {
      id: 2,
      excerpt: `<strong style='color:#f97316'>“SevenMentor”</strong> education techniques allow honing the abilities of the Networking experts from Industries which allow them to be equipped with the updated technology and standards of their operating environment. The group is a center for technical excellence with the kingdom of the art lab centers and a properly exquisite curriculum which gives them exposure in advance and enables them to be specific inside the certification enterprise. The organization takes pride in having instructors who are engrossed beyond Fifteen Years in enjoying as a trainer for Cisco devices. With that, they offer the foremost CCNA classroom training in Pune space as per trade standard. And assert as one of the fastest-growing network training institutions in the world and has a monopoly in the region.`,
    },
    {
      id: 3,
      excerpt: `The Institute’s strong placement cell has magnified its network amidst corporates over the years and is leveraged to realize nearly 100% placements of its students. Students frequently participate in field drives or joint field drives, conducted at neutral places or several company campuses. Students are allowed to attend the Pre-Placement speak with the corporate officers beforehand so that they get to perceive their profiles being offered higher and clarify their doubts. The Institute ensures the ability of employability for the scholars through its distinctive programs delivered by extremely practiced Academicians and Trade Resource Persons.`,
    },
    {
      id: 4,
      excerpt: `<strong style='color:#f97316'>"SevenMentor"</strong> has recorded an enviable benchmark in its various training courses. From Networking, Programming, Big Data Hadoop, CAD-CAM, Cloud Computing, HR Courses, to Digital Marketing and many more are added to their list of services over time. At SevenMentor, we believe everybody ought to have the chance to make progress through technology and evolve the talents of the near future with assessments, learning methods, and courses devised by trained professionals, our platform helps businesses and people set the benchmark experience across the roles speeding up the unleash cycles and build reliable, secure merchandise.”`,
    },
    {
      id: 5,
      excerpt: `<strong style='color:#f97316'>"SevenMentor"</strong> commits to line a benchmark within the Classroom and Online Training by remodeling the means of coaching which are procured, consumed and measured.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-3 md:p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        About{" "}
        <span className="text-orange-500 !text-3xl sm:!text-3xl lg:!text-5xl animated-text-fill !tracking-tight">
          SevenMentor
        </span>
      </h2>
      <div className="max-w-7xl w-full bg-gradient-to-br from-orange-500/30 via-black/95 to-orange-500/20 rounded-lg shadow-lg overflow-hidden">
        {posts.map((post) => (
          <div key={post.id} className="p-6 space-y-4">
            <p
              className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}
