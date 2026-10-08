import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import type { ReactNode } from 'react'

export interface NavButton {
  id: string
  text: string
}

export interface Social {
  href: string
  icon: ReactNode
}

export interface Project {
  name: string
  image: string
  tags: Array<string>
  link: string
  details: string
  github: string
}

export interface Skill {
  id: number
  name: string
  image: string
}

export interface ExperienceItem {
  role: string
  heading: string
  date: string
  info: string
}

export const project: Array<Project> = [
  {
    name: 'Devlinks',
    image: '/img/devlinks.webp',
    link: 'https://devlinks-my.vercel.app/',
    details:
      'Devlinks is a web application that allows developers to store, organize and share thier links easily and at a second.',
    github: 'https://github.com/abeeebdon/Devlinks',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    name: 'Lasom center',
    image: '/img/lasom.png',
    link: 'https://lasom.vercel.app/',
    details:
      'Lasom is a jewelry e-commerce platform that offers timeless jewelry collections to elevate beauty',
    github: 'https://github.com/abeeebdon/lasom',

    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    name: 'Sushi Food App',
    image: '/img/Majestic Sushi.png',
    link: 'https://majestic-sushi.netlify.app',
    details:
      'Sushi is an e commerse application for a  food restaurant that allows user to order different kinds of sushi.',
    github: 'https://github.com/abeeebdon/majestic-sushi',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },

  {
    name: 'Countries App',
    image: '/img/flag.png',
    link: 'https://count-app-sable.vercel.app/',
    details:
      'Countries app is an application that allow users access to some data about different companies including thier location, currencies and others ',
    github: 'https://github.com/abeeebdon/count-app',

    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    name: 'Fylo Landing Page',
    image: '/img/desktop.jpg',
    link: 'https://fylo-don.vercel.app/',
    details:
      'Fylo landing page is simple landing page. It is a practice project from frontend Mentor . ',
    github: 'https://github.com/abeeebdon/fyloLanding',

    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
]
export const socials: Array<Social> = [
  {
    href: 'https://www.facebook.com/abeeb.maroof',
    icon: <FaFacebook />,
  },
  {
    href: 'https://www.twitter.com/AbeebMaroof',
    icon: <FaXTwitter />,
  },
  {
    href: 'https://www.linkedin.com/in/abeebmaroof/',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/abeeebdon',
    icon: <FaGithub />,
  },
]
export const skills: Array<Skill> = [
  { id: 1, image: './img/html.png', name: ' HTML' },
  { id: 2, image: './img/css.png', name: 'CSS' },
  { id: 3, image: './img/javas.jfif', name: 'JAVASCRIPT' },
  { id: 4, image: './img/react_image.png', name: 'REACT' },
  { id: 5, image: './img/react_image.png', name: 'React Native' },

  { id: 6, image: './img/Next.png', name: 'NEXT' },
  { id: 7, image: './img/bootstrap_image.jpg', name: 'BOOTSTRAP' },
  { id: 8, image: './img/tailwind_image.png', name: 'TAILWIND' },
  { id: 9, image: './img/SASS.png', name: 'SASS' },
  { id: 10, image: './img/firebase.png', name: 'Firebase' },
  { id: 11, image: './img/supabase.jpeg', name: 'Supabase' },

  { id: 12, image: './img/expo.jpeg', name: 'Expo' },
]

export const experience: Array<ExperienceItem> = [
  {
    date: 'January 2026 till date',
    info: 'Collaborated with backend developers and design teams to deliver scalable solutions and seamless user experiences ',
    heading: 'Jompstart',
    role: 'Frontend Developer',
  },
  {
    date: 'March 2025 - January 2026',
    info: 'Collaborated with backend developers and design teams to deliver scalable solutions and seamless user experiences',
    heading: 'Stackron',
    role: 'Software Engineer Intern ',
  },
  {
    date: 'September 2024 - March 2025',
    info: 'Participated in the development of company website. Contributed to the development of an Estate - Realtor application',
    heading: 'Entacrest Nexus',
    role: 'Frontend Developer',
  },
  {
    date: 'July 2024 - September 2024',
    info: 'As one of the 523 finalists in the HNG Internship Program (out of 24,123 participants), I collaborated with a diverse team, including frontend developers, backend developers, UI/UX designers, data analysts, project managers, and QA testers. We worked on Tifi, an AI-powered platform, where I contributed to key frontend development tasks. This experience provided a real-world agile environment, enhancing my ability to deliver scalable and high-quality solutions while working with cross-functional teams under tight deadlines. It also enhanced my skills in Next JS, Shadcn, Tailwind CSS',
    heading: 'HNG Internship',
    role: 'Frontend Developer Intern',
  },
  {
    date: 'March 2024 - September 2024',
    info: 'Participated in the development of an ERP application built with React JS and tailwind CSS. This enhanced my skills in React JS and tailwind CSS.  Participated in the development of organisation landing page. Contributed to the development of a gospel application for uploading, listening and downloading of gospel music',
    heading: 'Entacrest Nexus',
    role: 'Frontend Developer Intern',
  },
  {
    date: 'January 2024 - February 2024',
    info: 'Participated in a team of frontend developers to create highly responsive and dynamic webpages using React Js and SCSS.',
    heading: 'CodeConure ',
    role: 'Frontend Developer Intern',
  },
]

export const buttons: Array<NavButton> = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'My Skills' },
  { id: 'projects', text: 'Projects' },
]
