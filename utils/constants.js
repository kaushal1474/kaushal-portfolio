import {
  bigscal,
  sigma,
  travelwin,
  sonyworld,
  differentdog,
  lynit,
  docusightai,
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
    title: "React Developer",
    icon: "/assets/about/computer-engineer.png",
  },
  {
    title: "Next JS Developer",
    icon: "/assets/about/cyber-monday_6145721.png",
  },
  {
    title: "Web Developer",
    icon: "/assets/about/programmer.png",
  },
  {
    title: "Responsive Design",
    icon: "/assets/about/responsive-website.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "/tech/react.png",
  },
  {
    name: "Next JS",
    icon: "/tech/nextjs.png",
  },
  {
    name: "Redux",
    icon: "/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "/tech/bootstrap.png",
  },
  {
    name: "git",
    icon: "/tech/git.png",
  },
  {
    name: "figma",
    icon: "/tech/figma.png",
  },
  {
    name: "Mui",
    icon: "/tech/material-ui.svg",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Bigscal Technologies Pvt. Ltd.",
    role: "(Team Leader)",
    icon: bigscal,
    iconBg: "#f80000",
    date: "Sept. 2020 - Dec. 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mid Senior React Developer",
    company_name: "Sigma Solve Ltd.",
    icon: sigma,
    iconBg: "#fff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Sony World",
    description:
      "SonyWorld is a dynamic online e-commerce platform that showcases and retails a wide array of cutting-edge electrical gadgets and products.",
    // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: sonyworld,
    source_code_link: "https://sonyworld.sa/en-sa/",
  },
  {
    name: "Travel.Win",
    subtext: "CMS tool",
    description:
      "Travel.win provides a cutting-edge platform for creating a tailored online travel and car rental website, featuring comprehensive capabilities for multi-currency support, commission management, and strategic partnership engagement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "cms",
        color: "pink-text-gradient",
      },
    ],
    image: travelwin,
    source_code_link: "https://www.travel.win/",
  },
  // {
  //     name: "Drop Travel",
  //     subtext: "Travel win",
  //     description:
  //         "A comprehensive travel booking platform that allows users to book hotels and rental cars, and provide strong support for multiple currencies and languages",
  //     tags: [
  //         {
  //             name: "nextjs",
  //             color: "blue-text-gradient",
  //         },
  //         {
  //             name: "tailwind",
  //             color: "green-text-gradient",
  //         },
  //         {
  //             name: "SaaS",
  //             color: "pink-text-gradient",
  //         },
  //     ],
  //     image: drop,
  //     source_code_link: "https://drop2.staging-1.app.travel.win/",
  // },
  {
    name: "DifferentDog",
    description:
      "A custom-built web application designed to facilitate a seamless and user-friendly experience for customers seeking high-quality, personalized dog food subscriptions.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "builder.io",
        color: "pink-text-gradient",
      },
    ],
    image: differentdog,
    source_code_link: "https://www.differentdog.com/",
  },
  {
    name: "Lynit",
    description:
      "Lynit is a comprehensive writing visualization platform that offers intuitive outlining, personalized recommendations, and collaborative features to empower authors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "D3",
        color: "pink-text-gradient",
      },
      {
        name: "quill",
        color: "blue-text-gradient",
      },
      {
        name: "dnd-kit",
        color: "green-text-gradient",
      },
    ],
    image: lynit,
    source_code_link: "https://www.lynit.app/",
  },
  {
    name: "DocuSight AI",
    description:
      "The cutting-edge AI platform that offers document analysis, summarization, and personalized insights to optimize professional and educational study.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescipt",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: docusightai,
    source_code_link: "https://docusightai.com/",
  },
];

const contacts = [
  {
    title: "linkedin",
    icon: "/assets/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/kaushal-chauhan-k1810/",
  },
  {
    title: "github",
    icon: "/assets/icons/github.svg",
    link: "https://github.com/kaushal1474",
  },
  // {
  //     title: "email",
  //     icon: "/assets/icons/email.svg",
  //     link: "mailto:kaushalchauhan1474@gmail.com"
  // },
  {
    title: "whatsapp",
    icon: "/assets/icons/whatsapp.svg",
    link: "https://wa.me/919773224535",
  },
  {
    title: "Phone",
    icon: "/assets/icons/phone.svg",
    link: "tel:+919773224535",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
