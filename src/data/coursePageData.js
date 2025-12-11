export const coursePageData = {
  navigation: [
    { id: 'about', label: 'About Course', icon: 'BookOpen' },
    { id: 'syllabus', label: 'Course Syllabus', icon: 'List' },
    { id: 'features', label: 'Key Features', icon: 'Sparkles' },
    { id: 'eligibility', label: 'Eligibility', icon: 'GraduationCap' },
    { id: 'certification', label: 'Certification', icon: 'Award' },
    { id: 'schedule', label: 'Batch Schedule', icon: 'Calendar' },
    { id: 'reviews', label: 'Student Reviews', icon: 'Star' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ],

  about: {
    title: 'About Data Science Course',
    description: 'Data Science is a booming field aimed to help people understand and manage huge amounts of data. The course focuses on providing extensive knowledge on statistical analysis, machine learning, and data-driven decision making.',
    highlights: [
      'Learn from industry experts with 10+ years of experience',
      'Hands-on training with real-world projects and case studies',
      'Master popular tools like Python, R, TensorFlow, and more',
      'Get certified and boost your career prospects'
    ],
    sections: [
      {
        heading: 'What is Data Science and How Machine Learning is used in it?',
        content: 'Data Science combines multiple fields including statistics, scientific methods, artificial intelligence (AI), and data analysis to extract value from data. Machine learning, a subset of AI, enables systems to learn and improve from experience without being explicitly programmed. In Data Science, ML algorithms analyze patterns in large datasets to make predictions and support data-driven decisions for business growth.'
      },
      {
        heading: 'Why Should You Take the Data Science Course?',
        content: 'The demand for skilled Data Scientists is at an all-time high across industries like finance, healthcare, retail, and technology. This course provides comprehensive training in statistical analysis, machine learning, and big data tools. You will learn industry-standard programming languages like Python and R, work on real projects, and gain practical experience that employers value.'
      },
      {
        heading: 'Best Data Science Course by ExamRoute',
        content: 'Our Data Science course stands out with its project-based learning approach, expert mentorship, and industry-relevant curriculum. We focus on both theoretical foundations and practical applications through live projects, case studies, and hands-on labs. Students gain proficiency in Python, R, machine learning libraries, data visualization tools, and Big Data technologies like Hadoop and Spark.'
      }
    ]
  },

  eligibility: {
    title: 'Course Eligibility',
    requirements: [
      { label: 'BE/ B.sc Candidate', eligible: true },
      { label: 'Any Engineers', eligible: true },
      { label: 'Any Graduates', eligible: true },
      { label: 'Any Post Graduate', eligible: true },
      { label: 'Working Professionals', eligible: true }
    ],
    additionalInfo: 'Basic knowledge of mathematics and programming is helpful but not mandatory. We provide foundation modules for beginners.'
  },

  proficiency: {
    title: 'Proficiency After Training',
    skills: [
      'Expert in Python programming and core Data Science libraries',
      'Master statistical analysis and Data Science Algorithms',
      'Hands-on experience with Machine Learning frameworks',
      'Able to work on real-world data analytics projects',
      'Knowledge of Big Data tools like Hadoop and Spark'
    ]
  },

  onlineClasses: {
    title: 'Online Classes',
    description: 'Because of the pandemic, there has been a tremendous rise in the demand for learning platforms for students. With live one-on-one as well as group learning sessions offered through our online classes, students today can access all the learning resources from throughout the world. In contrast, a traditional classroom-based course is no longer the sole option. Our online Data Science classes, built throughout the pandemic, demonstrate how Google Connect web software changed the computer.',
    features: [
      'Live interactive sessions with expert trainers',
      'Recorded sessions for future reference',
      'Screen sharing and whiteboard for better understanding',
      'Real-time doubt resolution',
      'Flexible timing options'
    ]
  }
};
