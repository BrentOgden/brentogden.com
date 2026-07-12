import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Denver Socials",
    category: "web",
    categoryLabel: "Web",
    tags: ["React", "Tailwind", "Lead Generation"],
    year: "2025",
    client: "External",
    description:
      "Landing page for a local non-profit that hosts networking events and meetups with the proceeds going to local causes. Built in React using Tailwind CSS.",
    img: "/thumbs/denver-socials.png",
    liveUrl: 'https://denversocials.com',
    caseStudyUrl: '/projects/denver-socials',
    thumbs: [
      
    ],
  },
  {
    id: 2,
    title: "B Squared Solutions",
    category: "web",
    categoryLabel: "Web",
    tags: ["React", "Tailwind CSS", "E-Commerce/Marketing"],
    year: "2025",
    client: "B Squared Solutions",
    description:
      'A polished business and consulting site built with React and Tailwind CSS, featuring parallax visuals, smooth animations, reusable components, and a modern section-based layout.',
    img: "/thumbs/b-squared-solutions.png",
    liveUrl: 'https://bsquaredsolutions.io',
    caseStudyUrl: '/projects/b-squared-solutions',
    thumbs: [
      "/screenshots/bsquared1.jpeg",
      "/screenshots/bsquared2.jpeg",
      "/screenshots/bsquared3.jpeg",
      "/screenshots/bsquared4.jpeg",
      "/screenshots/bsquared5.jpeg",
      "/screenshots/bsquared6.jpeg",
      "/screenshots/bsquared7.jpeg",
    ],
  },
  {
    id: 3,
    title: "Mile High Mashup",
    category: "sports",
    categoryLabel: "Sports",
    tags: ["React", "One-Page Application", "API Integration"],
    year: "2024",
    client: "Internal",
    description:
      "Site built in React utilizing Tailwind CSS and consuming APIs for scores, news, and videos relating to various Denver pro sports.",
    img: "/thumbs/mile-high-mashup.png",
    liveUrl: 'https://www.milehighmashup.com',
    caseStudyUrl: '/projects/mile-high-mashup',
    thumbs: [
      "/screenshots/mashup1.jpeg",
      "/screenshots/mashup2.jpeg",
      "/screenshots/mashup3.jpeg",
      "/screenshots/mashup4.jpeg",
      "/screenshots/mashup5.jpeg",
      "/screenshots/mashup6.jpeg",
    ],
  },
  {
    id: 4,
    title: "Fantasy Central",
    category: "sports",
    categoryLabel: "Sports",
    tags: ["React", "Tailwind CSS", "Multi-Page"],
    year: "2024",
    client: "Internal",
    description:
      "A companion site for the two different fantasy football leagues — built in React with Tailwind CSS. It features a multi-page layout with league standings, team awards, and player stats.",
    img: "/thumbs/fantasycentral.png",
    liveUrl: 'https://fantasycentral.co',
    caseStudyUrl: '/projects/fantasy-central',
    thumbs: [
      "/screenshots/fc1.jpeg",
      "/screenshots/fc2.jpeg",
      "/screenshots/fc3.jpeg",
      "/screenshots/fc4.jpeg",
      "/screenshots/fc5.jpeg",
      "/screenshots/fc6.jpeg",
    ],
  },
  {
    id: 5,
    title: "PSP Compass Solutions",
    category: "web",
    categoryLabel: "Web",
    tags: ["Duda CMS", "Marketing/Consulting", "Refresh/Redesign"],
    year: "2025",
    client: "PSP Compass Solutions",
    description:
      "Site for a consulting firm that needed a modern refresh. Incorporates modern design, parallax scrolling, and animations.",
    img: "/thumbs/psp-compass.png",
    liveUrl: 'https://www.pspcompass.com',
    caseStudyUrl: '/projects/psp-compass',
    thumbs: [
      
    ],
  },
  {
    id: 6,
    title: "Sustainable Geospatial",
    category: "corporate",
    categoryLabel: "Corporate",
    tags: ["Rebuild", "React", "Tailwind CSS", "Lead Generation"],
    year: "2025",
    client: "Sustainable Geospatial",
    description:
      "Site that was originally built using GoDaddy\'s web builder. It was rebuilt entirelyfrom scratch using React and Tailwind CSS to match the old site exactly with pixel-perfect accuracy.",
    img: "/thumbs/sustainable-geospatial.png",
    liveUrl: '#',
    caseStudyUrl: '/projects/sustainable-geospatial',

    thumbs: [
      
    ],
  },
  {
    id: 7,
    title: "A-Denver Roofing Landing Page",
    category: "landing page",
    categoryLabel: "Corporate",
    tags: ["WordPress", "Lead Generation", "Landing Page"],
    year: "2025",
    client: "A-Denver Roofing",
    description:
      "WordPress landing page built as part of a large Denver-based roofing company\'s corporate site. It includes parallax effects and on-page form implementation.",
    img: "/thumbs/a-denver-roofing.png",
    liveUrl: 'https://www.a-denverroofing.com',
    caseStudyUrl: '/projects/a-denver-roofing',
    thumbs: [
      
    ],
  },
  {
    id: 8,
    title: "JB Simply Clean",
    category: "corporate",
    categoryLabel: "Corporate",
    tags: ["Lead Generation", "Responsive Design", "Business Site"],
    year: "2018",
    client: "JB Simply Clean",
    description:
      "Professional, fully-responsive site for a carpet cleaning and water extraction business. Used for information and lead generation. It also incorporates user account creation, password reset, and email functionality. Owner has opted not to update the site since 2018, but it is still live and generating leads.",
    img: "/thumbs/jb-simply-clean.png",
    liveUrl: 'https://jbsimplyclean.com',
    caseStudyUrl: '/projects/jb-simply-clean',
    thumbs: [
      "/screenshots/jb1.jpeg",
      "/screenshots/jb2.jpeg",
      "/screenshots/jb3.jpeg",
      "/screenshots/jb4.jpeg",
      "/screenshots/jb5.jpeg",
      "/screenshots/jb6.jpeg",
    ],
  },
  {
    id: 9,
    title: "Ranger Golden Stud",
    category: "web",
    categoryLabel: "Web",
    tags: ["React", "Tailwind CSS", "Gallery/Portfolio"],
    year: "2025",
    client: "External",
    description:
      "Built in React using Tailwind CSS, this is a site built for someone who breeds Golden Retrievers. It features a gallery of images, breed data, and a responsive layout.",
    liveUrl: 'https://www.rangergoldenstud.com',
    caseStudyUrl: '/projects/ranger-golden-stud',
    img: "/thumbs/ranger-golden-stud.png",
    thumbs: [
      "/screenshots/ranger1.jpeg",
      "/screenshots/ranger2.jpeg",
      "/screenshots/ranger3.jpeg",
      "/screenshots/ranger4.jpeg",
      "/screenshots/ranger5.jpeg",
      "/screenshots/ranger6.jpeg",
    ],
  },
  // {
  //   id: 10,
  //   title: "Typeface: Granit",
  //   category: "branding",
  //   categoryLabel: "Branding",
  //   tags: ["Type Design", "Variable Font", "OpenType"],
  //   year: "2023",
  //   client: "Self-initiated",
  //   description:
  //     "A variable grotesque typeface with three optical sizes, six weights, and extensive language support across Latin, Greek, and Cyrillic. Released as an open-source typeface on GitHub.",
  //   img: "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=900&q=80",
  //   thumbs: [
  //     "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=400&q=70",
  //     "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?w=400&q=70",
  //     "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?w=400&q=70",
  //   ],
  // },
  // {
  //   id: 11,
  //   title: "Depth — Generative Installation",
  //   category: "motion",
  //   categoryLabel: "Motion",
  //   tags: ["p5.js", "WebGL", "Interactive"],
  //   year: "2024",
  //   client: "MoMA Pop-up",
  //   description:
  //     "A WebGL generative art installation driven by real-time audio input. Visitors controlled colour and density through ambient sound, creating a unique collaborative canvas over the course of the event.",
  //   img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&q=80",
  //   thumbs: [
  //     "https://images.unsplash.com/photo-1558618047-3c7b5e40e3a3?w=400&q=70",
  //     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=70",
  //     "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=70",
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "Void — 3D Environment",
  //   category: "3d",
  //   categoryLabel: "3D",
  //   tags: ["Unreal Engine 5", "Lumen", "Arch-viz"],
  //   year: "2024",
  //   client: "Arc Studio",
  //   description:
  //     "A photorealistic architectural visualisation of an unrealised brutalist building concept. Lumen global illumination, Nanite geometry, and a fully dynamic day/night cycle deliver a cinematic walkthrough.",
  //   img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=900&q=80",
  //   thumbs: [
  //     "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=70",
  //     "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=70",
  //     "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=400&q=70",
  //   ],
  // },
];

const filters = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "landing page", label: "Landing Page" },
  { value: "sports", label: "Sports" },
  { value: "corporate", label: "Corporate" },
  // { value: "3d", label: "3D" },
];

const desktopSpans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

function getTileSpan(index) {
  const mobileFeature = index === 0 || index === 7 ? "col-span-2" : "col-span-1";
  return `${mobileFeature} row-span-1 md:col-span-1 md:row-span-1 ${
    index === 0 || index === 7 ? "md:col-span-2" : ""
  } ${desktopSpans[index]}`;
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [heroImage, setHeroImage] = useState("");
  const [heroVisible, setHeroVisible] = useState(true);
  const panelRef = useRef(null);

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.scrollTo({ top: 0 });

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setHeroImage(project.img);
    setHeroVisible(true);
  };

  const swapHero = (image) => {
    setHeroVisible(false);
    window.setTimeout(() => {
      setHeroImage(image);
      setHeroVisible(true);
    }, 200);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950/50 font-sans text-[hsl(220,15%,92%)]">
      <header className="mx-auto max-w-[1400px] px-8 pb-6 pt-12 max-[480px]:px-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-[-0.03em]">
            <span className="h-2.5 w-2.5 rounded-full bg-brandAlt shadow-[0_0_12px_hsl(262,80%,65%)]" />
            Select Examples of My Work
          </div>
          <p className="pl-[1.35rem] text-[0.9rem] font-normal text-[hsl(220,10%,55%)]">
A deeper look at a few of the apps, tools, and sites I&apos;ve built. I&apos;ve
          focused on projects where I owned the front-end experience and worked
          closely with stakeholders to ship real outcomes — not just prototypes.          </p>
        </div>
      </header>

      <div className="sticky top-0 z-50 border-b border-[hsl(220,10%,18%)] bg-[hsla(220,14%,6%,0.85)] px-8 py-3 backdrop-blur-2xl max-[480px]:px-4">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`cursor-pointer rounded-full border px-4 py-[0.4rem] text-[0.82rem] font-medium tracking-[0.01em] transition-all duration-200 ease-out ${
                  active
                    ? "border-transparent bg-brand/80 text-white shadow-[0_0_16px_hsla(262,80%,65%,0.35)]"
                    : "border-[hsl(220,10%,18%)] bg-[hsl(220,12%,10%)] text-[hsl(220,10%,55%)] hover:border-[hsl(220,10%,30%)] hover:bg-[hsl(220,10%,14%)] hover:text-[hsl(220,15%,92%)]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] p-8 max-[480px]:p-4">
        <div className="grid auto-rows-[150px] grid-cols-2 gap-2.5 md:auto-rows-[180px] md:grid-cols-2 md:gap-4 lg:auto-rows-[200px] lg:grid-cols-4">
          {visibleProjects.map((project) => {
            const originalIndex = projects.findIndex((item) => item.id === project.id);
            return (
              <article
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`View project: ${project.title}`}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border border-[hsl(220,10%,18%)] transition-[transform,box-shadow] duration-300 ease-out hover:z-[2] hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_20px_60px_hsla(220,14%,2%,0.6)] ${getTileSpan(
                  originalIndex,
                )}`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,hsla(220,14%,4%,0.96)_0%,hsla(220,14%,4%,0.5)_50%,hsla(220,14%,4%,0.1)_100%)] p-5 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus:opacity-100">
                  <span className="mb-[0.3rem] translate-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-brandAlt transition-transform delay-[30ms] duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
                    {project.categoryLabel}
                  </span>
                  <h2 className="mb-2 translate-y-2 text-base font-bold leading-[1.3] transition-transform delay-[60ms] duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
                    {project.title}
                  </h2>
                  <div className="mb-3 flex translate-y-2 flex-wrap gap-[0.3rem] transition-transform delay-[90ms] duration-300 group-hover:translate-y-0 group-focus:translate-y-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brandAlt bg-black/40 px-[0.55rem] py-[0.2rem] text-[0.68rem] font-medium text-[hsl(223, 7%, 20%)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="self-start translate-y-2 rounded-full bg-brand/60 px-4 py-[0.45rem] text-[0.78rem] font-semibold text-white transition-[transform,background] delay-[120ms] duration-300 hover:bg-[hsl(250, 71%, 46%)] group-hover:translate-y-0 group-focus:translate-y-0"
                    aria-label={`Open ${project.title} details`}
                  >
                    View →
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <button
        type="button"
        aria-label="Close project details"
        onClick={() => setSelectedProject(null)}
        className={`fixed inset-0 z-[100] bg-[hsla(220,14%,2%,0.65)] backdrop-blur-sm transition-opacity duration-300 ${
          selectedProject
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        ref={panelRef}
        aria-hidden={!selectedProject}
        aria-label="Project details"
        className={`fixed right-0 top-0 z-[101] h-screen w-full max-w-full overflow-y-auto border-l border-[hsl(220,10%,18%)] bg-[hsl(220,12%,10%)] transition-transform duration-[350ms] [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] will-change-transform md:w-[480px] ${
          selectedProject ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setSelectedProject(null)}
          aria-label="Close project details"
          className="sticky top-4 z-[2] float-right mr-4 mt-4 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[hsl(220,10%,18%)] bg-[hsl(220,10%,14%)] text-[hsl(220,10%,55%)] transition-all duration-200 hover:bg-[hsl(220,10%,18%)] hover:text-[hsl(220,15%,92%)]"
        >
          ×
        </button>

        {selectedProject && (
          <div className="clear-both px-7 pb-12 pt-6">
            <img
              src={heroImage}
              alt={selectedProject.title}
              className={`mb-6 h-[260px] w-full rounded-xl object-cover transition-opacity duration-200 ${
                heroVisible ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="mb-7 grid grid-cols-3 gap-2">
              {selectedProject.thumbs.map((thumb, index) => (
                <button
                  key={`${thumb}-${index}`}
                  type="button"
                  onClick={() => swapHero(thumb)}
                  className="overflow-hidden rounded-md"
                >
                  <img
                    src={thumb}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="h-20 w-full cursor-pointer rounded-md border-2 border-transparent object-cover transition-[border-color,transform] duration-200 hover:scale-[1.03] hover:border-brand/60"
                  />
                </button>
              ))}
            </div>

            <p className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-brandAlt">
              {selectedProject.categoryLabel}
            </p>
            <h2 className="mb-3 text-[1.6rem] font-bold leading-tight tracking-[-0.03em]">
              {selectedProject.title}
            </h2>

            <div className="mb-5 flex flex-wrap gap-1.5">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brandAlt bg-[hsl(220,10%,14%)] px-[0.7rem] py-1 text-xs font-medium text-[hsl(220,10%,55%)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mb-7 text-[0.9rem] leading-[1.75] text-[hsl(220,12%,72%)]">
              {selectedProject.description}
            </p>

            <div className="mb-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[hsl(220,10%,18%)] bg-[hsl(220,10%,14%)] px-4 py-[0.85rem]">
                <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[hsl(220,10%,55%)]">
                  Year
                </p>
                <p className="text-[0.88rem] font-semibold text-[hsl(220,15%,92%)]">
                  {selectedProject.year}
                </p>
              </div>
              <div className="rounded-xl border border-[hsl(220,10%,18%)] bg-[hsl(220,10%,14%)] px-4 py-[0.85rem]">
                <p className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[hsl(220,10%,55%)]">
                  Client
                </p>
                <p className="text-[0.88rem] font-semibold text-[hsl(220,15%,92%)]">
                  {selectedProject.client}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
             <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-brand/60 px-5 py-3 text-[0.88rem] font-semibold text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-brand/30"
                >
                  View Live ↗
                </button>
              </a>
              <a href={selectedProject.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="rounded-xl border border-[hsl(220,10%,18%)] bg-transparent px-5 py-3 text-[0.88rem] font-semibold text-[hsl(220,10%,55%)] transition-all duration-200 hover:border-[hsl(220,10%,35%)] hover:text-[hsl(220,15%,92%)]"
                >
                  Case Study
                </button>
              </a>
            </div>
          </div>
        )}
      </aside>
    </main>
  );
}