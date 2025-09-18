import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kapil",
  lastName: "Bamotriya",
  name: `Kapil Bamotriya`,
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "kapilworkspace23@gmail.com",
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
    link: "https://github.com/kapilbamotriya123", 
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kapil-bamotriya/", // Update with actual LinkedIn
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
  headline: <>In Pursuit of Engineering That Solves</>,
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
       I'm a Full Stack Engineer (IIT Delhi '25) who believes in end-to-end ownership—transforming business problems into fully realized products. In my two years of building, my work has helped shape solutions at Lyskraft, Flibbr, and faff. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Faff",
        link: "https://www.faffit.com/",
        timeframe: "June’25 - Aug’25",
        role: "",
        description: "I led foundational engineering efforts at faff, delivering critical technical infrastructure with complete ownership in record time.",
        achievements: [
          <>
            Architected a full-stack ticketing system (Next.js, FastAPI, Docker), migrating all operations from Sheets.
          </>,
          <>
            Integrated Generative AI to automate note-taking (90% efficiency gain), improve QA (30% fewer errors), and create task summaries for 40% faster onboarding.
          </>,
          <>
            Rapidly developed and deployed AI-powered voice agents using VAPI in just one and a half weeks, automating over 50% of inbound calls, handling ~2500 calls.
          </>,
          <>
            Developed a multi-prompt GenAI system to parse unstructured chats, generating customer profiles and actionable insights to enhance customer experience and retention.
          </>,
          <>
            Created an LLM-based task categorizer with 87% accuracy across 150+ categories (95% on core tasks) by leveraging embeddings from a dataset of 5,000 tasks.
          </>,
          <>
            Analyzed over 25 metrics to drive KPI improvements, boosting on-time ETAs from 45% to 70%, and created automated investor reports that saved two manual workdays per week.
          </>,
        ],
        images: [],
      },
      {
        company: "Flibbr",
        link: "https://beta.flibbr.ai/",
        timeframe: "Dec’24 - Mar’25",
        role: "Full Stack Developer",
        description: "As a founding team member, I built beyond a minimal viable product, developing robust features with complete ownership of projects.",
        achievements: [
          <>
            Translated high-fidelity Figma designs into pixel-perfect, responsive user interfaces for landing pages and user flows, utilizing Next.js, Shadcn components, and Tailwind CSS.
          </>,
          <>
            Managed complex application state efficiently using Zustand and significantly optimized front-end performance by implementing lazy loading techniques, which resulted in a 40% reduction in initial load times.
          </>,
          <>
            Integrated real-time communication features using WebSockets and developed a custom Google Maps API implementation with advanced animations to create highly interactive and engaging location-based services.
          </>,
          <>
            Constructed secure and robust authentication flows and developed comprehensive user dashboards, while also implementing GA4 and Hotjar for detailed conversion tracking and user behavior analysis.
          </>,
        ],
        images: [],
      },
      {
        company: "Lyskraft India Pvt Ltd",
        link: "https://lyskraft.com",
        timeframe: "Sept’24 - Nov’24",
        role: "Front End Developer",
        description: "In my first corporate role, I contributed as a frontend engineer, working closely with the product team to deliver precise UI implementations with excellent performance.",
        achievements: [
          <>
            Developed several key pages for a large-scale e-commerce application, including the homepage and a dynamic multimedia component, using Remix and GraphQL to fetch and display data.
          </>,
          <>
            Significantly improved page load times and rendering performance by strategically implementing Remix's Deferred and Critical Data loaders, ensuring a faster and smoother user experience.
          </>,
          <>
            Resolved critical loading issues on Product Detail Pages (PDP) and Product Listing Pages (PLP), integrated a new in-store availability feature, and implemented interactive animations, leading to a 25% improvement in loading speeds.
          </>,
        ],
        images: [],
      },
    ],
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Projects",
    items: [
      {
        name: "AI-Powered Ticketing System",
        timeframe: "2024",
        role: "Full Stack Developer",
        description: "Enterprise ticketing system with integrated AI capabilities for automated workflows", // Optional italic description
        achievements: [
          <>
            Built with Next.js, FastAPI, and Docker, featuring real-time updates and automated ticket routing
          </>,
          <>
            Integrated LLM-based features for intelligent ticket classification and response generation
          </>,
          <>
            Implemented comprehensive analytics dashboard with data visualization using Chart.js
          </>,
        ],
        images: [],
      },
      {
        name: "Focus Lens Chrome Extension",
        timeframe: "2023",
        role: "Developer",
        description: "Productivity extension to help users maintain focus during web browsing", // Optional italic description
        achievements: [
          <>
            Developed using Chrome Extension APIs with React for the popup interface
          </>,
          <>
            Implemented website blocking, time tracking, and productivity analytics features
          </>,
          <>
            Achieved 500+ active users within the first month of launch
          </>,
        ],
        images: [],
      },
      {
        name: "Fitness Event Management Platform",
        timeframe: "2023",
        role: "Full Stack Developer",
        description: "Comprehensive platform for organizing and managing fitness events", // Optional italic description
        achievements: [
          <>
            Created event registration system with payment gateway integration using Stripe
          </>,
          <>
            Built real-time participant tracking and leaderboard features using WebSocket
          </>,
          <>
            Developed mobile-responsive interface with offline capability using PWA technologies
          </>,
        ],
        images: [],
      },
      // {
      //   name: "Real-time Chat Application",
      //   timeframe: "2023",
      //   role: "Backend Developer",
      //   achievements: [
      //     <>
      //       Architected scalable chat system using Node.js and Socket.IO for real-time communication
      //     </>,
      //     <>
      //       Implemented end-to-end encryption for secure messaging and file sharing
      //     </>,
      //     <>
      //       Designed MongoDB schema for efficient message storage and retrieval with pagination
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Indian Institute of Technology, Delhi",
        description: <>Bachelor of Technology in Biotechnology and Biochemical Engineering (2021-2025*)</>,
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Invoice Generation App",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Real-time Chat Application",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Ticketing System",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-5.jpg",
      alt: "Ticketing System",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
