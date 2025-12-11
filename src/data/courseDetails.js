export const courseDetails = {
  'data-science': {
    slug: 'data-science',
    title: 'Data Science',
    subtitle: 'Master Data Science & Machine Learning',
    description: 'Transform your career with our comprehensive Data Science training program. Learn Python, Machine Learning, AI, and Big Data technologies from industry experts.',
    image: '/assets/course-hero-bg.jpg'
  },
  'data-analytics': {
    slug: 'data-analytics',
    title: 'Data Analytics',
    subtitle: 'Become a Data Analytics Expert',
    description: 'Master data analysis, visualization, and business intelligence. Learn SQL, Excel, Tableau, Power BI, and transform data into actionable insights.',
    image: '/assets/course-hero-bg.jpg'
  },
  'machine-learning': {
    slug: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Master Machine Learning & AI',
    description: 'Deep dive into machine learning algorithms, neural networks, and AI. Build intelligent systems that learn from data and make predictions.',
    image: '/assets/course-hero-bg.jpg'
  },
  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    subtitle: 'Explore the World of AI',
    description: 'Learn cutting-edge AI technologies including deep learning, NLP, computer vision, and build next-generation intelligent applications.',
    image: '/assets/course-hero-bg.jpg'
  },
  'python': {
    slug: 'python',
    title: 'Python Programming',
    subtitle: 'Master Python Development',
    description: 'Learn Python from basics to advanced. Master web development with Django/Flask, data analysis, automation, and build powerful applications.',
    image: '/assets/course-hero-bg.jpg'
  },
  'java': {
    slug: 'java',
    title: 'Java Programming',
    subtitle: 'Become a Java Expert',
    description: 'Master Java programming, OOP concepts, data structures, Spring Boot, and build enterprise-level applications with industry best practices.',
    image: '/assets/course-hero-bg.jpg'
  }
};

export const getCourseBySlug = (slug) => {
  return courseDetails[slug] || null;
};

export const getAllCourseSlugs = () => {
  return Object.keys(courseDetails);
};
