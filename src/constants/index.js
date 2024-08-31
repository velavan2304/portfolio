import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

// Navigation Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Services Offered
const services = [
  { title: "Programmer", icon: web },
  { title: "Data Analyst", icon: mobile },
  { title: "Augmented Reality", icon: backend },
  { title: "Graphic Design", icon: creator },
];

// Technologies
const technologies = [
  { name: "Docker", icon: docker },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "MongoDB", icon: mongodb },
  { name: "Node JS", icon: nodejs },
  { name: "Figma", icon: figma },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
];

// Experience Details
const experiences = [
  {
    title: "Google Cloud Arcade Facilitator",
    company_name: "Google Cloud",
    icon: starbucks,
    iconBg: "#000",
    date: "Aug 2024 - Present",
    points: [
      "Guide participants through hands-on experiences with Google Cloud technologies.",
      "Deliver structured learning sessions and assist with real-time problem-solving.",
      "Foster an engaging learning environment and provide insights into cloud services.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "Designed user-friendly interfaces for web and mobile applications.",
      "Proficient in HTML, CSS, JavaScript, Photoshop, Figma, and Illustrator.",
      "Managed projects and clients as a freelance web developer.",
    ],
  },
  {
    title: "3D Modelling and Graphic Design",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in 3D modeling, texturing, lighting, rendering, and animation using Blender.",
      "Provide design services for product design, branding, marketing, and virtual environments.",
      "Collaborated with artists and production teams to ensure visual consistency.",
    ],
  },
  // Uncomment if needed
  /*
  {
    title: "Leadership Experience",
    company_name: "Student Leader and Build Leader | Under 25 Summit",
    icon: meta,
    iconBg: "#000000",
    date: "Dec 2022 - Mar 2023",
    points: [
      "Led a team and managed festival aspects with over 35k+ attendees.",
      "Trained in storytelling, festival management, and leadership.",
      "Designed and coordinated the build of an art installation.",
    ],
    link: "https://docs.google.com/document/d/1N7kQVzkMqRNvYhY9tnZqIVmIFVD61qjUQ4lOoV12noQ/edit",
  },
  */
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "Programming Projects",
    description:
      "A collection of programming projects showcasing proficiency in various languages and technologies like Python, HTML, CSS, JavaScript, React JS, C++, and MySQL.",
    tags: [
      { name: "Coding", color: "blue-text-gradient" },
      { name: "Web Development", color: "green-text-gradient" },
      { name: "Android Development", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/velavan2304",
  },
  {
    name: "Augmented Reality",
    description:
      "Development of an AR application that overlays digital content onto the real world, allowing interaction with 3D models and information.",
    tags: [
      { name: "AR", color: "blue-text-gradient" },
      { name: "Spark AR", color: "green-text-gradient" },
      { name: "Lens Studio", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link:
      "https://lensstudio.snapchat.com/creator/asNQfFLoP0ePL8jxEpvSJw",
  },
  {
    name: "UI & UX Design",
    description:
      "Creation of engaging visual content through 3D art, graphic design, and video editing, tailored to meet client needs and exceed expectations.",
    tags: [
      { name: "Blender", color: "blue-text-gradient" },
      { name: "Photoshop", color: "green-text-gradient" },
      { name: "Premiere Pro", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
