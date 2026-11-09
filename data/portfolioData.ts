export interface JobExperience {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export const portfolioData = {
  personal: {
    name: 'Yousuf Syed',
    title: 'Full Stack Engineer | Vue.js • Node.js • Express • MongoDB • MySQL',
    email: 's.yousuf1235@gmail.com',
    phone: '+91 7416051235',
    linkedin: 'https://www.linkedin.com/in/yousuf-syed-dev',
    location: 'Hyderabad, Telangana, India',
    about: 'Full Stack Engineer with more than 5 years of experience architecting high-performance web applications—specializing in high-performance frontend architecture (SPA & SSR), robust backend API development with Node.js & Express, and scalable database systems.'
  },
  metrics: [
    { value: '50%', label: 'Page Load Time Reduction' },
    { value: '40%', label: 'Team Productivity Boost' },
    { value: '30%', label: 'Delivery Time Saved' },
    { value: '5 Years', label: 'Full Stack Expertise' }
  ],
  frontendSkills: [
    'Vue.js (v2/v3)', 'Nuxt.js (SSR/SSG)', 'JavaScript (ES6+)', 'TypeScript',
    'Tailwind CSS', 'HTML5 / CSS3', 'Pinia / Vuex', 'Responsive Design'
  ],
  backendSkills: [
    'Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication',
    'MongoDB / Mongoose', 'MySQL / Sequelize', 'Performance Tuning', 'CI/CD Pipelines'
  ],
  certifications: [
    'Certified VueJS Professional',
    'Certified JavaScript Developer',
    'Generative AI & Responsible AI',
    'AI-First Software Engineering'
  ],
  experiences: [
    {
      role: 'Associate Consultant',
      company: 'Infosys',
      period: 'May 2025 - Present',
      location: 'Hyderabad, Telangana, India',
      bullets: [
        'Architected and developed full stack solutions using Vue.js and Nuxt.js for large-scale client applications.',
        'Designed robust RESTful API contracts with Node.js and Express.js, ensuring optimal database queries and backend performance.',
        'Modeled relational and non-relational database architectures using MongoDB and MySQL to handle high-volume enterprise data.',
        'Mentored junior developers on Vue.js best practices, Node service structures, and TypeScript standards while leading code reviews.',
        'Contributed directly to Macy\'s e-commerce application, enhancing the Payment Checkout module and backend transaction workflows.'
      ]
    },
    {
      role: 'Software Engineer - 1',
      company: 'Owfis Stark.ai / 500apps',
      period: 'January 2023 - March 2025',
      location: 'Hyderabad, Telangana, India',
      bullets: [
        'Engineered full stack features combining dynamic Vue.js user interfaces with secure Node.js & Express.js microservices.',
        'Optimized database operations and indexing in MongoDB and MySQL, cutting slow-query latency significantly.',
        'Built reusable component systems and modular backend controllers, reducing overall feature delivery time by 30%.',
        'Executed performance optimization protocols that reduced initial page load time by 50%.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Mantra',
      period: 'June 2022 - December 2022',
      location: 'Hyderabad, Telangana, India',
      bullets: [
        'Developed responsive single-page web applications (SPAs) integrated with backend REST APIs.',
        'Assisted in designing database schemas, query optimization, and endpoint routing using Express.js.',
        'Refactored legacy interface codebases into clean, component-driven layouts to improve maintainability.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'Talentsprint Pvt. Ltd.',
      period: 'January 2022 - May 2022',
      location: 'Hyderabad, Telangana, India',
      bullets: [
        'Received intensive hands-on training in core JavaScript fundamentals, Node.js runtime environments, and asynchronous programming concepts.',
        'Assisted full stack development teams in building frontend templates, writing basic API endpoints, and executing debugging workflows.',
        'Participated in agile code reviews and learned enterprise version control best practices using Git.'
      ]
    }
  ] as JobExperience[]
}