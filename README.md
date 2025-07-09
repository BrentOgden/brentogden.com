# Brent Ogden Portfolio

Welcome to my personal portfolio site—showcasing projects, my story, and ways to connect. Built with modern web technologies and deployed on Netlify.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [Folder Structure](#folder-structure)  


---

## Demo

Live site: https://brentogden.com

---

## Features

- **Hero Intro** — A succinct welcome with a brief bio and call-to-action.  
- **Project Gallery** — Showcase of recent work with images, descriptions, and links.  
- **My Story** — Background narrative and career journey.  
- **Let’s Connect** — Social links (LinkedIn, GitHub), resume download, and contact form.  
- **Responsive Design** — Mobile-first layout that adapts gracefully to all screen sizes.  

---

## Tech Stack

- **Framework:** React  
- **Bundler:** Vite  
- **Styling:** TailwindCSS  
- **Animations:** Framer Motion (or CSS transitions)  
- **Forms & Links:** Netlify Forms
- **Deployment:** Netlify  

---

## Getting Started

### Prerequisites

- Node.js ≥ 16.x  
- npm or Yarn  

### Installation

bash
git clone https://github.com/your-username/brentogden-portfolio.git
cd brentogden-portfolio
npm install
or
yarn

### Folder Structure
.
├── public/                # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/            # Images, icons, logos
│   ├── components/        # Reusable UI components (Header, Footer, Gallery, etc.)
│   ├── pages/             # Sections (Home, Projects, Story, Connect)
│   ├── styles/            # Tailwind config, global CSS
│   ├── App.jsx            # Routes & layout
│   └── main.jsx           # Application entrypoint
├── .gitignore             # Ignore rules
├── tailwind.config.js
├── vite.config.js
└── README.md
