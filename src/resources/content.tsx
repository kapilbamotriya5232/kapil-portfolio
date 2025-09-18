import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kapil",
  lastName: "Bamotriya",
  name: `Kapil Bamotriya`,
  role: "Founding Engineer",
  avatar: "/images/avatar.jpg",
  email: "kapilbamotriya@gmail.com",
  location: "Asia/Kolkata", // Updated to India timezone
  languages: ["English", "Hindi"], // Updated languages
};

const newsletter: Newsletter = {
  display: false, // Set to false since not mentioned in requirements
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on engineering and innovation</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kapilbamotriya", // Update with actual GitHub
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kapilbamotriya/", // Update with actual LinkedIn
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building AI-driven systems from the ground up</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Faff Technologies</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/faff-ticketing-system",
  },
  subline: (
    <>
      I'm Kapil, a results-driven engineer with foundational experience in building 
      full-stack applications and AI-driven systems. Passionate about leveraging 
      <br /> Next.js, FastAPI, and LLM integration to solve complex challenges and drive business growth.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to false since not mentioned
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A results-driven engineer with foundational experience in building full-stack applications 
        and AI-driven systems from the ground up. Proven ability to architect and deliver high-impact 
        solutions, including ticketing systems and GenAI integrations that were instrumental in securing 
        seed funding. Passionate about leveraging technology like Next.js, FastAPI, and LLM integration 
        to solve complex challenges and drive business growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Faff Technologies Pvt. Ltd.",
        timeframe: "June 2024 - Aug 2024",
        role: "Founding Engineer",
        achievements: [
          <>
            Architected and built a full-stack ticketing system using Next.js, FastAPI, and Docker, 
            successfully migrating the company's entire operations from Google Sheets. This system 
            was a key factor in securing seed funding.
          </>,
          <>
            Integrated Generative AI features that automated 90% of note-taking, implemented an AI QA 
            process that reduced errors by 30%, and created task summaries that accelerated new-hire 
            onboarding by 40%.
          </>,
          <>
            Developed AI voice agents with VAPI in just 1.5 weeks, which automated 50% of customer 
            calls and supported the seed round with 1,000 pre-seed calls.
          </>,
          <>
            Engineered a multi-prompt GenAI system to parse unstructured chats, generating structured 
            customer profiles and insights to enhance customer experience and retention.
          </>,
        ],
        images: [],
      },
      {
        company: "ByteAlchemy Innovations Pvt. Ltd.",
        timeframe: "Dec 2023 - Mar 2024",
        role: "Front End Developer",
        achievements: [
          <>
            Crafted pixel-perfect, responsive user interfaces from Figma designs using Next.js, 
            Shadcn components, and Tailwind CSS.
          </>,
          <>
            Managed complex state with Zustand and optimized application performance with lazy loading, 
            achieving a 40% reduction in load times.
          </>,
          <>
            Integrated real-time websockets and a custom Google Maps API featuring advanced animations 
            to build interactive location-based services.
          </>,
        ],
        images: [],
      },
      {
        company: "Lyskraft India Pvt Ltd",
        timeframe: "Sept 2023 - Nov 2023",
        role: "Front End Developer",
        achievements: [
          <>
            Built key pages for an e-commerce application, including the homepage, using Remix and GraphQL.
          </>,
          <>
            Improved page load times and rendering performance by implementing Remix's Deferred and 
            Critical Data loaders.
          </>,
          <>
            Resolved loading issues on product detail pages (PDP) and product listing pages (PLP), 
            resulting in 25% faster loading times.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Indian Institute of Technology, Delhi",
        description: <>Bachelor of Technology in Biotechnology and Biochemical Engineering (2021-2025)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Core Tech",
        description: (
          <>Proficient in JavaScript, TypeScript, Python, HTML, CSS, and SQLite3 for building robust applications.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: (
          <>Expert in React.js, Next.js, Node.js, FastAPI, TailwindCSS, MongoDB, Socket.IO, and LLM Integration.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and AI...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Projects Gallery – ${person.name}`,
  description: `A showcase of projects by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Fitness Event Management Platform",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Focus Lens Chrome Extension",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Invoice Generation App",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Social Media App",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Real-time Chat Application",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "AI Voice Agents",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "GenAI Integration",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Ticketing System",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
