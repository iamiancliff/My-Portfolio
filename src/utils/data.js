import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 85, color: "bg-blue-500" },
      { name: "Next.js", level: 70, color: "bg-indigo-400" },
      { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 70, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 70, color: "bg-green-500" },
      { name: "Express.js", level: 85, color: "bg-teal-400" },
      { name: "Python", level: 80, color: "bg-yellow-500" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "MySQL", level: 75, color: "bg-blue-700" },
      { name: "Firebase", level: 65, color: "bg-yellow-600" },
      { name: "PostgreSQL", level: 63, color: "bg-red-500" },
      { name: "Amazon S3", level: 70, color: "bg-orange-500" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 50, color: "bg-blue-600" },
      { name: "AWS", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 90, color: "bg-gray-400" },
      { name: "Render", level: 80, color: "bg-green-600" },
      { name: "Git", level: 95, color: "bg-orange-700" },
      { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "AWS EC2",
  "GitHub Actions",
  "Terraform",
  "Amazon VPC",
  "Postman",
  "Amazon CloudFront",
  "Amazon RDS",
  "MongoDB Atlas",
  "Vite",
  "Cypress",
  "Notion",
  "Slack",
];


export const PROJECTS = [
  {
    id: 1,
    title: "EdTech Platform",
    description:
      "TabiaZetu is a cutting-edge, data-driven classroom behavior control tool. It was created with the goal of making it easier to track student behavior and giving educators useful insights so they may design more productive learning environments.",
    image: PROJECT_IMG_1,
    tags: ["MongoDB", "Express", "React", "NodeJS", "Tailwind"],
    liveUrl: "https://tabia-zetu.vercel.app/",
    githubUrl: "https://github.com/iamiancliff/tabia-zetu",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Hosting a Static Website on Amazon Simple Storage Service(S3)",
    description:
      "Deployed a fully functional static website using Amazon S3. The project involved configuring S3 buckets for static website hosting, setting up appropriate bucket policies for public access, and enabling static website hosting features.",
    image: PROJECT_IMG_2,
    tags: ["Amazon S3", "Static Website", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/iamiancliff",
    featured: true,
    category: "AWS",
  },
  {
    id: 3,
    title: "Resume Checker",
    description:
      "This Python tool is made to automatically extract technical skills from PDF resumes. The tool automatically detects and extracts skills from candidate resumes. Despite being designed as a command-line interface (CLI) program, this version is tailored for quick and precise results and is readily extensible to more use cases.",
    image: PROJECT_IMG_3,
    tags: ["Python", "spaCy", "PyPDF2", "CLI", "NLP"],
    liveUrl: "#",
    githubUrl: "https://github.com/iamiancliff/resume-checker",
    featured: true,
    category: "AI/NLP Tool",
  },
  {
    id: 4,
    title: "Cloud Security with AWS IAM",
    description:
      "In this project, I launched an EC2 instance and configured IAM users, groups, and policies to gain experience with secure access control and AWS service management. I developed skills in creating IAM users and managing access using JSON policy structures.",
    image: PROJECT_IMG_4,
    tags: ["AWS IAM", "Amazon EC2"],
    liveUrl: "https://learn.nextwork.org/amused_purple_kind_lulo/portfolio",
    githubUrl: "https://github.com/iamiancliff",
    featured: false,
    category: "AWS",
  },

  {
    id: 5,
    title: "QuizQuest",
    description:
      "QuizQuest is a responsive, interactive quiz website built with HTML, CSS, and JavaScript. It features a three-page layout: Home, Quiz, and Results, with a clean design, interactive questions, score tracking, answer review, and an image slider.",
    image: PROJECT_IMG_5,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://iamiancliff.github.io/QuizQuest/",
    githubUrl: "https://github.com/iamiancliff",
    featured: false,
    category: "Web App",
  },

  {
    id: 6,
    title: "Expense Tracker App",
    description:
      "A full-stack MERN expense tracker app with secure user login, JWT authentication, and an intuitive dashboard. Users can track income, expenses, view financial summaries, and export data, all enhanced with interactive charts for better financial management",
    image: PROJECT_IMG_6,
    tags: ["MongoDB", "Express", "React", "NodeJS"],
    liveUrl: "#",
    githubUrl: "https://github.com/iamiancliff",
    featured: true,
    category: "Web App",
    status: "In Progress",
  },
{
    id: 7,
    title: "Visualizing Data using Amazon Quicksight",
    description:
      "I used Amazon QuickSight to analyze and visualize data stored in my S3 Bucket. By connecting QuickSight to the bucket, I created interactive dashboards, identified key trends, and generated insightful reports to enhance data-driven decision-making.",
    image: PROJECT_IMG_7,
    tags: ["Amazon QuickSight", "Data Visualization", "S3"],
    liveUrl: "https://learn.nextwork.org/amused_purple_kind_lulo/portfolio",
    githubUrl: "https://github.com/iamiancliff",
    featured: false,
    category: "AWS",
},
];

export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Public Administration & Leadership Degree",
    company: "Jomo Kenyatta University of Agriculture and Technology",
    description:
      "I hold a degree in Public Administration and Leadership, which gave me a strong foundation in problem-solving, analytical thinking, and leadership. While my academic background is outside of tech, it has shaped how I approach challenges with structure, collaboration, and a focus on creating solutions that make a positive impact.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "I started my coding journey from absolute zero, teaching myself the fundamentals of web development. At first, even basic HTML,CSS, and Javascript felt overwhelming, but I stayed consistent, building simple, beginner-friendly projects one step at a time. Through trial, error, and persistence, I slowly grasped the logic of programming and gained the confidence to bring ideas to life with code. Those early struggles built the foundation that drives me today: resilience, curiosity, a passion for learning, and a commitment to continuous growth.",
    icon: Code2,
    color: "bg-blue-500",
  },
   {
    year: "Aug - Oct 2024",
    title: "Professional Foundations",
    company: "ALX Africa.",
    description:
      "Before beginning the AWS Cloud Computing program, I completed the ALX Professional Foundations training — an 8-week program designed to build the essential soft and professional skills needed for success in tech. The experience covered self-reflection, personal development, goal setting, teamwork, research, and project delivery. I worked on a collaborative project addressing youth unemployment, where my role involved wireframing, slide design, and presenting our solution. By the end of the program, I had strengthened my skills in communication, teamwork, and personal branding, while also building confidence in presenting myself professionally.",
    icon: Rocket,
    color: "bg-orange-500",
  },
  {
    year: "Oct 2024 - May 2025",
    title: "AWS Cloud Computing Program",
    company: "ALX Africa.",
    description:
      "With a strong foundation in place, I transitioned into the ALX AWS Cloud Computing program. This intensive course focused on self-driven learning, problem-solving, and mastering the fundamentals of cloud computing. I gained hands-on knowledge of AWS services, security, architecture, and cloud best practices while completing regular assessments. In January 2025, I passed the AWS Certified Cloud Practitioner exam, validating my understanding of core AWS services and cloud concepts. Upon completing the program in May 2025, I was also certified by ALX. This journey not only deepened my technical expertise but also strengthened my ability to learn independently and apply cloud solutions effectively.",
    icon: Cloud,
    color: "bg-green-500",
  },
  {
    year: "Feb - July 2025",
    title: "Software Development Schorlaship",
    company: "Power Learn project",
    description:
      "While continuing my AWS Cloud Computing journey, I also joined the Power Learn Project Software Development Scholarship, a program designed to provide end-to-end software engineering training. The first 8 weeks covered the core learning modules: Software Engineering Essentials, MySQL Databases, Employability, Startup Building, and Python Essentials. This gave me a solid technical and professional foundation before moving into the specialization phase. I specialized in Full Stack Development (MERN stack), where I applied my skills in a capstone project called TabiaZetu — an EdTech classroom behavior management tool designed for teachers. The platform helps educators track student behavior, generate reports and analytics, and make data-driven decisions to foster positive student development. The project was completed as part of the program, but I continue improving it to make it more robust and impactful. I am set to officially graduate from the Power Learn Project in December 2025.",
    icon: Briefcase,
    color: "bg-cyan-500",
  },

  {
    year: "2025",
    title: "Freelance & Personal Projects",
    company: "Present",
    description:
      "Alongside structured programs, I have taken on freelance work and collaborated with fellow developers to build and refine web applications. These projects have allowed me to apply my skills in real-world scenarios, focusing on solving client needs and improving application functionality. I also dedicate time to personal projects, where I experiment with new tools, frameworks, and ideas to sharpen my problem-solving and development skills. These projects not only showcase my technical growth but also reflect my curiosity and drive to keep learning. Through freelancing, collaboration, and personal initiatives, I continue to grow as a developer who can work independently, adapt quickly, and deliver practical solutions..",
    icon: Award,
    color: "bg-pink-500",
  },
];

export const PASSIONS = [
  {
    icon: Cloud,
    title: "Cloud & Data Visualization",
    description: "Cloud computing and making data-driven decisions",
  },
  {
    icon: Coffee,
    title: "Collaborative Problem Solving",
    description: "Pairing, sharing ideas, and building practical solutions together",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Curious mindset and small improvements every day",
  },
  {
    icon: Heart,
    title: "Impactful Tech",
    description: "Building solutions that make a positive difference",

  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    badgeColor: "bg-yellow-500",
    verifyUrl: "https://www.credly.com/badges/3260b719-4709-4e65-a10d-f1c44ef31bac/linked_in_profile" ,
  },
  {
    id: 2,
    title: "Professional Foundations",
    issuer: "ALX Africa",
    year: "2024",
    badgeColor: "bg-blue-500",
    verifyUrl: "https://intranet.alxswe.com/certificates/JRsfBY7ZGS",
  },
  {
    id: 3,
    title: "AI Career Essentials ",
    issuer: "ALX Africa",
    year: "2024",
    badgeColor: "bg-pink-500",
    verifyUrl: "https://intranet.alxswe.com/certificates/cTSyC2hnLG",
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    issuer: "eMobilis Mobile Technology Institute",
    year: "2024",
    badgeColor: "bg-green-500",
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
  {
    id: 5,
    title: "Basic Microsoft Office Skills Training",
    issuer: "African Development Bank Group",
    year: "2020",
    badgeColor: "bg-purple-500",
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
  {
    id: 6,
    title: "Software Development Scholarship",
    issuer: "Power Learn Project",
    year: "2025",
    badgeColor: "bg-cyan-500",  
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
  { 
    id: 7,
    title: "Introduction to CSS",
    issuer: "SoloLearn ",
    year: "2023",
    badgeColor: "bg-yellow-600",
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
  { 
    id: 8,  
    title: "Analyzing and Visualizing Data with Microsfoft Excel",
    issuer: "Beyond Data Community - Data Science, AI & Machine Learning",
    year: "2024",
    badgeColor: "bg-green-600",
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
  { 
    id: 9,
    title: "Microsoft Learn AI Skills Challenge",
    issuer: "Microsoft",
    year: "2023",
    badgeColor: "bg-blue-600",
    verifyUrl: "https://www.linkedin.com/in/ianwende/details/certifications/",
  },
];

export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/iamiancliff",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://linkedin.com/in/ianwende",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:iancliff15@gmail.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
    },
  ];

  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
    },
    {
      icon: Mail,
      label: "Email",
      value: "iancliff15@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 792 156 702",
    },
  ];