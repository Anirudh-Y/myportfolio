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
    interwiu,
    spider,
    axis,
    carrent,
    jobit,
    tripguide,
    threejs,
    nginx,
    python,
    sql,
    c_c,
    azure,
    fastapi,
    btp
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "3D Modelling",
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
      name: "C/C++",
      icon: c_c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
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
      name: "Python",
      icon: python,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "Nginx",
      icon: nginx,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "Interwiu.com - Fyzen Career Solutions",
      icon: interwiu,
      iconBg: "#383E56",
      date: "Feb. 2023 — Apr. 2023",
      points: [
        "Developed and integrated a MERN Stack Video Chat Application using WebRTC Framework via PeerJS library",
        "Utilized Socket.io library to enable event-based bi-directional communication efficiently between client and server",
        "Designed algorithm for many-to-many connections using PeerJS and developed REST APIs and hosted the application on E2E networks",
      ],
    },
    {
      title: "Business Analyst Intern",
      company_name: "Axis Bank",
      icon: axis,
      iconBg: "#E6DEDD",
      date: "May. 2023 — Jul. 2023",
      points: [
        "Designed customer-level-view dashboard using SAS software and data manipulation using complex SQL queries",
        "Strategized algorithms for Risk Analysis of SBB loans, boosting customer count and reducing credit risk exposure",
        "Identified changes in filters resulting in 11%, 2.2%, and 1.4% increase in base for MAB, Micro, and DLP SA loans",
      ],
    },
    {
      title: "Front End Developer Intern",
      company_name: "Spider Innovative Technologies",
      icon: spider,
      iconBg: "#383E56",
      date: "Jun. 2022 — Jul. 2022",
      points: [
        "Designed and developed templates, and single-page websites using JavaScript, HTML, CSS and Bootstrap",
        "Collaborated over GitHub with the team to ensure seamless coordination in creating, and deploying website",
        "Revamped the existing template codes with Tailwind CSS, replaced non-responsive elements using Bootstrap",
      ],
    }
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Understanding the Scale Effect on the Shear Behaviour of Rock Joints using DEM",
      description:
        "Developed a Particle Flow Code (PFC) in Python for Discrete Element Modeling (DEM) of rock structure and properties. Achieved a fast and efficient way to understand the change in shear properties such as dilation angle, shear strength, peak strength with respect to change in size over various field samples. Fine-tuned parameters to infer rockmass properties and behaviour, enabling precise estimation for rocks shear behaviour",
      tags: [
        {
          name: "Paper Accepted for ARMS13 Conference",
          color: "blue-text-gradient",
        },
        {
          name: "Paper Under: Prof. Shantanu Kumar Patel, IIT Kharagpur and Mr. Suryajyoti Nanda, IIT Kharagpur",
          color: "green-text-gradient",
        },
        // {
        //   name: "Mr. Suryajyoti Nanda, IIT Kharagpur",
        //   color: "green-text-gradient",
        // },
      ],
      image: btp,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Intelligent Document Navigator",
      description:
        "Developed a web application with ReactJS and FastAPI for uploading and managing documents and hosted it on Azure VM. Generated document embeddings using the pre-trained sentence transformer model all-MiniLM-L6-v2. Leveraged Pinecone database for efficient storage and processing of vectorized data. Implemented cosine similarity to predict document names matching client input queries. Enabled clients to set custom threshold scores retrieving extra documents beyond the default cut-off.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "pincone",
          color: "pink-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Anirudh-Y/callprep",
    },
    {
      name: "Blog Website",
      description:
        "Developed a blog website using the MERN stack. Implemented user authentication with JWT tokens for secure login and signup. Integrated file upload functionality with multer, enabling users to upload images of any type.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "jwt",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Anirudh-Y/Blog-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };