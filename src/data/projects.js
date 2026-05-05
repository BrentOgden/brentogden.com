// src/data/projects.js

export const projects = [
  {
    id: 'denver-socials',
    slug: 'denver-socials',
    title: 'Denver Socials',
    type: 'Community Page · React · Tailwind',
    year: '2025',
    description:
      'Landing page for a local non-profit that hosts networking events and meetups with the proceeds going to local causes. Built in React using Tailwind CSS.',
    impact:
      'Gave the organization a modern hub to promote their events, explain their mission, and drive signups for local networking and nonprofit support.',
    role: 'Design · Front-End Development · UX',
    tech: ['React', 'Tailwind CSS', 'Netlify', 'Forms'],
    liveUrl: 'https://denversocials.com',
    thumbnail: '/thumbs/denver-socials.png',
    caseStudy: {
      summary:
        'A modern landing page experience to highlight various Denver Socials events and their impact on the non-profits that they support.',
      problem: [
        'Events were promoted across scattered platforms without a single branded destination.',
        'The mission and nonprofit contribution needed clearer storytelling.',
        'The existing site needed a modern refresh for appeal and usability.',
      ],
      approach: [
        'Built a small React/Tailwind site focused on a clear hero, event highlights/details, and CTAs throughout to drive engagement.',
        'Used glassmorphism-style cards to present events and partners in a clean, modern way.',
        'Designed a cleaner logo for use throughout the brands various channels.',
      ],
      outcome: [
        'Created a central hub for all promotions, events and invites.',
        'Helped explain how event proceeds support local causes in a concise, clean visually-appealing layout.',
      ],
    },
  },
{
  id: 'b-squared-solutions',
  slug: 'b-squared-solutions',
  title: 'B Squared Solutions',
  type: 'Business/Consulting Site · React · Tailwind · Parallax · Animations',
  year: '2025',
  description:
    'A polished business and consulting site built with React and Tailwind CSS, featuring parallax visuals, smooth animations, reusable components, and a modern section-based layout.',
  impact:
    'Elevated the brand with a fast, professional, highly-visual site built on reusable components—making future additions and pages quick to build while ensuring visual consistency.',
  role: 'Architecture · UI/UX · Front-End Development · Component Engineering',
  tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Reusable Components'],
  liveUrl: 'https://bsquaredsolutions.io',
  thumbnail: '/thumbs/b-squared-solutions.png',

  caseStudy: {
    summary:
      'A bold, modern consulting site built from the ground up using React and Tailwind. The site delivers a structured, animated, and visually engaging experience designed to showcase services, projects, and personal brand credibility.',

    problem: [
      'The previous website experience lacked a cohesive brand identity and did not reflect the polish or capability of the services offered.',
      'There was no reusable design system or component structure, making new pages and updates slow and inconsistent.',
      'The site needed a more modern look—one that established credibility quickly for clients viewing portfolio work or service offerings.',
    ],

    approach: [
      'Architected a fully responsive, section-based React layout built with Tailwind CSS for rapid iteration and visual consistency.',
      'Built reusable UI components—Glass cards, animated sections, parallax hero, skill grid, testimonials, timeline, and project cards.',
      'Implemented smooth scroll-based animations and micro-interactions to create a high-end, modern consulting aesthetic.',
      'Added a scalable project showcase structure with thumbnails, case studies, filtering, and rich interactive detail pages.',
      'Optimized for speed, accessibility, and clarity—prioritizing fast load times and clean navigation across all devices.',
    ],

    outcome: [
      'Launched a professional-grade consulting/portfolio platform that clearly communicates expertise across React, UI/UX, and full front-end engineering.',
      'Created a reusable design system that will support future expansions (blog, package pages, client dashboards, long-form case studies).',
      'Improved brand credibility, helping prospective clients understand services, past work, and technical skillset at a glance.',
      'Delivered a site architecture that can scale as the business grows—new pages, new packages, and new case studies can be added effortlessly.',
    ],

    highlights: [
      'Framer-style animated background with glassmorphic UI system.',
      'Reusable, fully responsive component library built in React + Tailwind.',
      'Interactive project gallery with case-study level detail pages.',
      'Parallax hero section, smooth scroll animations, and dynamic skill grid.',
      'High-performance build optimized for Lighthouse, SEO, and accessibility.',
    ],
  },
},

  {
    id: 'mile-high-mashup',
    slug: 'mile-high-mashup',
    title: 'Mile High Mashup',
    type: 'Sports Information Site · React · Tailwind · APIs ',
    year: '2022',
    description:
      'Site built in React utilizing Tailwind CSS and consuming APIs for scores, news, and videos relating to various Denver pro sports.',
    impact:
      'Provides a curated, Colorado-centric experience for fans to see scores, news, and media in one place.',
    role: 'Architecture · Front-End Development · API Integration',
    tech: ['React', 'Tailwind CSS', 'REST APIs'],
    liveUrl: 'https://www.milehighmashup.com',
    thumbnail: '/thumbs/mile-high-mashup.png',
    caseStudy: {
      summary:
        'A Denver sports hub that aggregates scores, news, facts and videos for local pro sports teams.',
      problem: [
        'Denver fans were jumping between multiple apps and sites to track their different teams.',
        'There was no single hub that felt tailored to Denver sports culture where all the information could be found in one place.',
      ],
      approach: [
        'Built a React/Tailwind front-end that integrates external APIs for scores, news, and highlights.',
        'Organized content into clearly labeled sections for quick viewing and mobile-friendly use.',
      ],
      outcome: [
        'Delivered a unified experience for Denver sports content.',
        'Laid a foundation for future features like historical stats and fan polls.',
      ],
    },
  },

  {
    id: 'fantasycentral',
    slug: 'fantasycentral',
    title: 'FantasyCentral',
    type: 'Fantasy Football Companion Site · React · Tailwind',
    year: '2021',
    description:
      'A companion site for the two fantasy football leagues that I run — built in React with Tailwind CSS.',
    impact:
      'Centralized all-time records, standings, and league history so managers can easily explore stats and storylines.',
    role: 'Product Design · Front-End Engineering · UX/UI',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://fantasycentral.co',
    thumbnail: '/thumbs/fantasycentral.png',
    caseStudy: {
      summary:
        'A dedicated hub for members of our fantasy leagues to view records, league history, and historical stats in one place.',
      problem: [
        'League history and records were scattered across ESPN, spreadsheets, and chats.',
        'Owners needed a consistent way to view weekly awards and milestones.',
      ],
      approach: [
        'Designed a structure around seasons, teams, and records with reusable stat components.',
        'Built a responsive UI using React/Tailwind for quick, mobile-first browsing.',
      ],
      outcome: [
        'League members now have a single place to explore history and current season results and awards.',
        'Reduced manual tracking and made league engagement more fun.',
      ],
    },
  },

  {
    id: 'psp-compass',
    slug: 'psp-compass',
    title: 'PSP Compass Solutions',
    type: 'Consulting Site · Modern Refresh',
    year: '2025',
    description:
      'Site for a consulting firm that needed a modern refresh. Incorporates modern design, parallax scrolling, and animations.',
    impact:
      'Repositioned the firm with a cleaner visual language and clearer explanation of services, improving perceived credibility.',
    role: 'Design · Front-End Implementation · Animation',
    tech: ['React', 'Tailwind CSS', 'Scroll Animations'],
    liveUrl: 'https://www.pspcompass.com',
    thumbnail: '/thumbs/psp-compass.png',
    caseStudy: {
      summary:
        'A full visual refresh for a consulting firm to better match their expertise and message.',
      problem: [
        'The previous site felt dated and didn\'t reflect the firm\'s strategic capabilities.',
        'Content was hard to scan and didn\'t tell a cohesive story about services and results.',
      ],
      approach: [
        'Developed a refreshed layout with parallax sections and subtle animations.',
        'Restructured pages so visitors move from high-level overview into more detailed service information.',
      ],
      outcome: [
        'Improved clarity around offerings and a more polished first impression for prospective clients.',
      ],
    },
  },

  {
    id: 'sustainable-geospatial',
    slug: 'sustainable-geospatial',
    title: 'Sustainable Geospatial',
    type: 'Rebuild · React · Tailwind',
    year: '2025',
    description:
      'Site that was originally built using GoDaddy\'s web builder. I rebuilt the site from scratch using React and Tailwind CSS to match the old site exactly with pixel-perfect accuracy.',
    impact:
      'Migrated a fragile, builder-based site into a modern stack while preserving the visual brand users were used to.',
    role: 'Rebuild · Front-End Engineering · Pixel-Perfect Implementation',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://www.sustainablegeospatial.com',
    thumbnail: '/thumbs/sustainable-geospatial.png',
    caseStudy: {
      summary:
        'A careful rebuild of an existing site to remove platform limitations without changing the user-facing design.',
      problem: [
        'The original GoDaddy builder site was limiting, hard to maintain, and not developer-friendly.',
        'The client wanted to keep the existing look, but needed a more modern and flexible implementation.',
      ],
      approach: [
        'Rebuilt the layout in React/Tailwind with close attention to spacing, typography, and imagery.',
        'Kept URLs and structure as stable as possible to preserve SEO.',
      ],
      outcome: [
        'Achieved a nearly identical visual match with a modern, maintainable codebase.',
      ],
    },
  },

  {
    id: 'a-denver-roofing',
    slug: 'a-denver-roofing',
    title: 'A-Denver Roofing Landing Page',
    type: 'WordPress Landing Page',
    year: '2025',
    description:
      'WordPress landing page built as part of a large Denver-based roofing company\'s corporate site. It includes parallax effects and on-page form implementation.',
    impact:
      'Created a high-impact, campaign-ready page that ties into the broader corporate site while capturing leads effectively.',
    role: 'Layout · Front-End Development · WordPress Implementation',
    tech: ['WordPress', 'Custom Theme', 'Parallax', 'Forms'],
    liveUrl: 'https://www.a-denverroofing.com',
    thumbnail: '/thumbs/a-denver-roofing.png',
    caseStudy: {
      summary:
        'A visually engaging landing page for a major roofing company, designed to convert visitors into leads.',
      problem: [
        'The brand needed a standalone page to highlight specific offerings and campaigns.',
        'The page had to feel premium while staying consistent with the corporate site.',
      ],
      approach: [
        'Designed a long-form layout emphasizing trust, social proof, and a clear CTA.',
        'Implemented parallax sections and an on-page form within WordPress.',
      ],
      outcome: [
        'Improved clarity and conversion opportunity for roofing campaigns.',
      ],
    },
  },

  {
    id: 'jb-simply-clean',
    slug: 'jb-simply-clean',
    title: 'JB Simply Clean',
    type: 'Business Site · Lead-Generation · Responsive',
    year: '2018',
    description:
      'Professional, fully-responsive site for my friend\'s business. It also incorporates user account creation, password reset, and email functionality.',
    impact:
      'Gave the business a more professional web presence and basic account management flows for customers.',
    role: 'Full-Stack Lite · UI · Auth Flows',
    tech: ['React', 'Tailwind CSS', 'Node/Express', 'Email Integration'],
    liveUrl: 'https://jbsimplyclean.com',
    thumbnail: '/thumbs/jb-simply-clean.png',
    caseStudy: {
      summary:
        'A small business site with just enough application logic to support user accounts and communication.',
      problem: [
        'The business needed more than a simple brochure site — needed to future-proof for customers to create accounts and perform basic self-service.',
      ],
      approach: [
        'Built a responsive marketing site with additional auth-related pages for account creation and password resets.',
        'Hooked in email functionality for notifications and contact.',
      ],
      outcome: [
        'Delivered a more application-like experience while keeping the UX simple and approachable.',
        'Provided the business with a clean, minimal and professional web presence that can serve as a destination for the business\' social media channels.',
      ],
    },
  },

  {
    id: 'ranger-golden-stud',
    slug: 'ranger-golden-stud',
    title: 'Ranger Golden Stud',
    type: 'Brochure Site · React · Tailwind',
    year: '2025',
    description:
      'Built in React using Tailwind CSS, this is a site I built for someone who breeds Golden Retrievers.',
    impact:
      'Shows off the dog\'s pedigree, health information, and photos in a warm, trustworthy layout that encourages inquiries.',
    role: 'Design · Front-End Development · Content Structure',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://www.rangergoldenstud.com',
    thumbnail: '/thumbs/ranger-golden-stud.png',
    caseStudy: {
      summary:
        'A calm and friendly brand site for a client offering Golden Retriever breeding services.',
      problem: [
        'Breeding inquiries rely heavily on trust, clarity, and showcasing the dog in a professional way.',
      ],
      approach: [
        'Used a photo-forward layout with simple sections for health info, pedigree, and contact information.',
        'Kept the color palette soft and inviting to fit the subject matter.',
        'Added video backgrounds and gallery image funcationality to highlight the dog\'s evolution.',
      ],
      outcome: [
        'Helped drive qualified inquiries and gave owners a link they could confidently share, while emphasizing the pedigree and qualities of Ranger.',
      ],
    },
  },

  // {
  //   id: 'original-portfolio',
  //   slug: 'original-portfolio',
  //   title: 'Original One-Page Portfolio',
  //   type: 'Legacy Portfolio · One Page',
  //   year: '~2019',
  //   description:
  //     'The first portfolio site that I built 6 years ago as a one-page, highly visual showcase of my work.',
  //   impact:
  //     'Served as an early playground for learning layout, animation, and portfolio storytelling.',
  //   role: 'Design · Development',
  //   tech: ['HTML', 'CSS', 'JavaScript'],
  //   liveUrl: null,
  //   thumbnail: '/thumbs/original-portfolio.png',
  //   caseStudy: {
  //     summary:
  //       'An early experiment in building a one-page portfolio with bold visuals.',
  //     problem: [
  //       'Needed a way to show work in a single, scrollable experience without a complex CMS.',
  //     ],
  //     approach: [
  //       'Structured content into large, full-width sections with strong visual hierarchy.',
  //     ],
  //     outcome: [
  //       'Became the foundation for later portfolio iterations, including your current site.',
  //     ],
  //   },
  // },
]
