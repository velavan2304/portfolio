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

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Programmer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Augmented Realty",
    icon: backend,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Google cloud arcade Facilitator",
    company_name: "Google Cloud",
    icon: starbucks,
    iconBg: "#000",
    date: "Aug2024 - Present",
    points: [
      "As a Google Cloud Arcade Facilitator, I guide participants through hands-on experiences with Google Cloud technologies, ensuring they acquire practical skills in cloud computing. My responsibilities include delivering structured learning sessions, assisting participants with real-time problem-solving, and fostering an engaging learning environment. I help participants navigate through interactive labs, provide insights into cloud services, and encourage them to explore and innovate with Google Cloud tools.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "Designed and developed user-friendly interfaces for web and mobile applications, ensuring a seamless user experience and high levels of engagement.",
      "Proficient in HTML, CSS, JavaScript, and graphic design software such as Photoshop, Figma and Illustrator",
      "Worked as a freelance web developer, managing projects and clients.",
      ,
    ],
  },
  {
    title: "3D Modelling and Graphic Design",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Proficient in 3D modeling, texturing, lighting, rendering, and animation software, such as Blender",
      "Provide design services for various applications, including product design, branding, marketing, and virtual environment",
      "Worked collaboratively with other artists, designers, and production teams to ensure cohesiveness and consistency of visuals",
      "Deliver projects that align with client expectations and current industry trends.",
    ],
  },
  /*{
    title: "Leadership Experience",
    company_name: "Student Leader and Build Leader | Under 25 Summit",
    icon: meta,
    iconBg: "#000000",
    date: "Dec 2022 - March 2023",
    points: [
      "As a Student Leader, I was responsible for leading a team of hustlers and managing various aspects of the festival. The festival had over 35k+ students attending and featured 7 stages with more than 500+ thought leaders that included CEOs, Influencers, change makers, celebrities, and Student talent across the globe.",
      "Throughout the internship, I expressed my ability to effectively coordinate and manage a team. I was trained in various skills such as storytelling, festival management, and leadership.",
      "As a Build Leader, my responsibilities included designing, estimating, and coordinating the build of an art installation that was displayed at the festival.",
    ],
    link: "https://docs.google.com/document/d/1N7kQVzkMqRNvYhY9tnZqIVmIFVD61qjUQ4lOoV12noQ/edit",
  },*/
];

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

const projects = [
  {
    name: "Programming Projects ",
    description:
      "As a programmer, I'm proud to say that my collection of programming projects demonstrates my versatility and proficiency in multiple programming languages and technologies. With my skills in Python, HTML, CSS, JavaScript, React JS, C++, and MySQL, I've been able to create a variety of innovative and exciting projects.",
    tags: [
      {
        name: "coding",
        color: "blue-text-gradient",
      },
      {
        name: "web-development",
        color: "green-text-gradient",
      },
      {
        name: "androiddevelopment",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/velavan2304",
  },
  {
    name: "Augmented Reality ",
    description:
      "This project involves the development of an Augmented Reality (AR) application that overlays digital content onto the real world. The AR experience allows users to interact with 3D models, animations, and information displayed in their physical environment through devices like smartphones, tablets, or AR glasses. The project aims to create an engaging and interactive experience, applicable across various fields such as education, marketing, gaming, and product visualization.",
    tags: [
      {
        name: "AR",
        color: "blue-text-gradient",
      },
      {
        name: "sparkar",
        color: "green-text-gradient",
      },
      {
        name: "lensstudio",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://lensstudio.snapchat.com/creator/asNQfFLoP0ePL8jxEpvSJw",
  },
  {
    name: "UI & UX Design",
    description:
      "As a multimedia artist, I have a diverse skill set that includes 3D art, graphic design, and video editing. With my expertise in these fields, I have been able to create engaging and dynamic visual content that captivates audiences and communicates messages effectively. My skill set as an artist allows me to creating compelling visual content that meets the client's needs and exceeds their expectations.",
    tags: [
      {
        name: "blender",
        color: "blue-text-gradient",
      },
      {
        name: "photoshop",
        color: "green-text-gradient",
      },
      {
        name: "premiere-pro",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
