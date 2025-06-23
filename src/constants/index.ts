import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Video Editor", icon: backend },
  { title: "Content Creator", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences: TExperience[] = [
  {
    title: "Video Editor",
    companyName: "Youtube",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "I’m a passionate video editor and content creator specializing in the tech field. I create engaging, high-quality videos that simplify complex technology, from reviews and unboxings to tutorials and comparisons. With a sharp eye for detail and creativity, I aim to deliver content that informs, inspires, and connects with tech enthusiasts. Let’s bring tech stories to life — one frame at a time!",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "iPhone 14 Pro",
    description:
      "In this video, I share why I decided to buy a second-hand iPhone 14 Pro in 2025 — was it a smart money-saving move or a risky decision? 🤔🔥 Watch till the end as I break down the price, condition, performance, and whether buying used tech is worth it in 2025!",
    image: "https://img.youtube.com/vi/gSxmLPoPk0I/maxresdefault.jpg",
    sourceCodeLink: "https://youtu.be/gSxmLPoPk0I?si=X6NZuq7uuy0R6EtQ",
  },
  {
    name: "iPhone 15 vs 13 Pro",
    description:
      "Thinking of upgrading your iPhone in 2025? 📱 In this video, I compare the refurbished iPhone 13 Pro with the brand-new iPhone 15 to help you decide which one gives you the best value for your money! 💸",
    image: "https://img.youtube.com/vi/mX3mQaBd45s/maxresdefault.jpg",
    sourceCodeLink: "https://youtu.be/mX3mQaBd45s?si=BMgJLKtVhZOTl9EO",
  },
  {
    name: "Samsung S25 Ultra",
    description:
      "In this video, I bring you a detailed camera review of the Samsung S25 Ultra — and yes, it’s super improved! 🔥📸 From stunning low-light shots to next-level zoom, see how the S25 Ultra’s camera performs in real-world conditions.",
    image: "https://img.youtube.com/vi/lubYIBet_KU/maxresdefault.jpg",
    sourceCodeLink: "https://youtu.be/lubYIBet_KU?si=MejPtk0Jquo1UjHy",
  },
];

export { services, technologies, experiences, testimonials, projects };
