export interface Project {
  name: string;
  desc: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    view?: string;
    code?: string;
  };
  details?: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  skills: string[];
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  availableForHire: boolean;
  roles: string[];
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    telegram: string;
    instagram: string;
    dev: string;
  };
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: string[];
}

export const portfolioData: PortfolioData = {
  name: "Manju Thakor",
  title: "Frontend & MERN Stack Developer",
  subTitle: "Building fast, responsive web applications and interactive dashboards with React, Next.js, Node.js, and MongoDB.",
  bio: "I'm a Frontend & MERN Stack Developer based in Ahmedabad, Gujarat with over 3 years of hands-on experience crafting real-world SaaS products and web applications. I specialize in building pixel-perfect UIs with React and Next.js, integrating RESTful APIs, and developing backend services with Node.js and MongoDB. I focus on writing clean, reusable code and creating smooth user experiences.",
  email: "thakor.manju.391@gmail.com",
  phone: "+91 98983 43610",
  location: "Ahmedabad, Gujarat, India",
  resumeUrl: "https://tmanju01.github.io/portfolio/resume.pdf",
  availableForHire: true,
  roles: [
    "Frontend Developer",
    "MERN Stack Developer",
    "React.js & Next.js Specialist",
    "FullStack Web Developer"
  ],
  socials: {
    linkedin: "https://linkedin.com/in/thakor-manju",
    github: "https://github.com/tmanju01",
    twitter: "https://twitter.com/",
    telegram: "https://t.me/",
    instagram: "https://www.instagram.com/",
    dev: "https://dev.to/"
  },
  skillCategories: [
    {
      title: "Frontend",
      icon: "Globe",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Vanilla JS", "Redux", "State Management", "Responsive Design", "Cross-Browser Compatibility", "Web APIs"]
    },
    {
      title: "Backend & APIs",
      icon: "Server",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Session Management", "Middleware", "Error Handling", "Async/Await", "API Security"]
    },
    {
      title: "Database & UI Styling",
      icon: "Database",
      skills: ["MongoDB", "Mongoose", "Tailwind CSS", "Material UI", "Ant Design", "Bootstrap", "Responsive Design", "UI/UX Design", "CSS Animations", "Styled Components"]
    },
    {
      title: "Tools & Workflow",
      icon: "Cpu",
      skills: ["Git & GitHub", "Postman", "VS Code", "Chrome DevTools", "OpenAI Integration", "CI/CD Basics", "Docker", "NPM/Yarn", "Webpack", "Testing Libraries"]
    }
  ],
  projects: [
    {
      name: "Marinapy – Marina Management",
      desc: "Developed a cloud-based SaaS platform for end-to-end operations including berth management, CRM, and billing. Built responsive, map-based data visualization for real-time asset monitoring and implemented self-service onboarding flows.",
      category: "SaaS Platform",
      image: "/images/marinapy.svg",
      tags: ["React.js", "Next.js", "Ant Design", "Tailwind CSS", "REST APIs"],
      links: {
        view: "https://marinapy.com/",
        code: "https://github.com/tmanju01"
      },
      featured: true
    },
    {
      name: "Texture – Digital Marketing",
      desc: "Contributed to a SaaS platform delivering AI-powered text analysis and ad enhancement tools. Built dynamic UI components to seamlessly integrate API-driven workflows for ad optimization and context-aware Django template rendering.",
      category: "SaaS Platform",
      image: "/images/texture.svg",
      tags: ["React.js", "HTML5/CSS3", "Django", "OpenAI API", "REST APIs"],
      links: {},
      featured: true
    },
    {
      name: "ShareLyze – Secure File Sharing",
      desc: "Developed a secure file-sharing platform using the MERN Stack. Built RESTful APIs with Node.js and Express.js, stored file metadata in MongoDB using Mongoose, implemented JWT-based authentication, and created dynamic activity tracking.",
      category: "MERN Stack",
      image: "/images/sharelyze.svg",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      links: {},
      featured: true
    }
  ],
  experience: [
    {
      company: "PySquad Informatics",
      role: "Full Stack Developer",
      location: "Ahmedabad, Gujarat",
      period: "Sep 2023 – Present",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Ant Design", "Node.js", "Express.js", "MongoDB"],
      responsibilities: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, Next.js, and Node.js.",
        "Designed and integrated secure REST APIs with Express.js and Node.js.",
        "Managed MongoDB databases using Mongoose for efficient data storage and retrieval.",
        "Built responsive and user-friendly interfaces using React.js, Next.js, Tailwind CSS, Bootstrap, and Ant Design.",
        "Implemented JWT authentication, authorization, and role-based access control.",
        "Optimized application performance through lazy loading, code splitting, and API optimization.",
        "Collaborated with cross-functional teams using Git and GitHub in an Agile development environment."
      ]
    },
    {
      company: "Tops Technologies",
      role: "Frontend Developer Intern",
      location: "Ahmedabad, Gujarat",
      period: "Jan 2023 – Jun 2023",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "REST APIs", "Chrome DevTools"],
      responsibilities: [
        "Created responsive landing pages and web interface components using HTML5, CSS3, and React.js, ensuring cross-browser compatibility.",
        "Connected frontend forms and views to backend REST APIs across multiple project modules.",
        "Used Chrome DevTools to debug layout issues, network requests, and JavaScript errors."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Smt. B.K. Mehta (IT Centre) BCA College",
      location: "Palanpur, Gujarat",
      period: "Aug 2018 – Apr 2022",
      status: "Completed",
      details: "Studied computer applications, web development fundamentals, database systems, and object-oriented programming."
    }
  ],
  certifications: [
    {
      title: "FullStack Web Development with MERN",
      issuer: "Udemy / freeCodeCamp"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp"
    },
    {
      title: "Frontend Development with React.js",
      issuer: "Tops Technologies",
      year: "2023"
    }
  ],
  languages: ["English", "Hindi", "Gujarati"]
};
