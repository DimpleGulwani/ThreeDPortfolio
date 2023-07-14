import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    netflix,
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
    SpreeBee,
    Hirav,
    Blogpage,
    tesla,
    shopify,
    carrent,
    jobit,
    threejs,
    toDo,
    user
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Web Devloper",
      company_name: "SpreeBee",
      icon: SpreeBee,
      iconBg: "#383E56",
      date: "June 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using Html, Css,Nodejs ,ExpressJs,Nodejs,MongoDB and javascript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "FrontEnd Developer",
      company_name: "Hirav Healthcare",
      icon: Hirav,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Developing and maintaining web applications using pure Html,Css and Bootstrap",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dimple proved me wrong.",
      name: "Harshita Jain",
      designation: "Student",
      company: "JIET",
      image: user,
    },
    {
      testimonial:
        "Amazing Experience working as a team memeber with Dimple Gulwani",
      name: "Vikram Kumar",
      designation: "Employee",
      company: "MyStemLab",
      image: user,
    },
    {
      testimonial:
        "After Dimple optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Isha Acharya",
      designation: "student",
      company: "JIET",
      image: user,
    },
  ];
  
  const projects = [
    {
      name: "BlogPage",
      description:
        "A university blogpage which is made using pure HTML and CSS and Bootstrap",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
       {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name:'Bootstrap',
          color:"blue-text-gradient"
        }
      ],
      image: Blogpage,
      source_code_link: "https://dimplegulwani.github.io/UniversityBlogPage/"
    },
    {
      name: "ToDo List",
      description:
        "A todo list app which is used to add,remove and checked the task if it is done.It is build using Nodejs and Mongodb",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
        {
          name:'MongoDB',
          color:'green-text-gradient'
        }
      ],
      image: toDo,
      source_code_link: "https://github.com/",
    },
    {
      name: "Netflix",
      description:
        "A simple netflix clone build using pure HTML,CSS and JAVSCRIPT.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
         
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://dimplegulwani.github.io/NetflixClone/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
 