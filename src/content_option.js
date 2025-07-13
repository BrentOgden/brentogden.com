import html5 from './assets/images/html5.png';
import css3 from './assets/images/css3.png';
import react from './assets/images/react.png';
import javascript from './assets/images/javascript.png';
import python from './assets/images/python.png';
import nodejs from './assets/images/nodejs.png';
import php from './assets/images/php.png';
import github from './assets/images/github.png';
import tailwindcss from './assets/images/tailwindcss.png';
import wordpress from './assets/images/wordpress.png';
import jquery from './assets/images/jquery.png';
import photoshop from './assets/images/photoshop.png';
import npm from './assets/images/npm.png';
import vite from './assets/images/vite.png';
import bootstrap from './assets/images/bootstrap.png';
import profile from './assets/images/brentimage.jpg';
import shopify from './assets/images/shopify.png';
import ranger from './assets/images/rangerpreview-min.jpg'
import fantasy from './assets/images/fcpreview-min.jpg'
import fantasyVid from './assets/videos/fantasyrecord-2.webm'
import portfolioVid from './assets/videos/portrecord.webm'
import milehighmashupVid from './assets/videos/milehighmashuprecord.webm'
import jbVid from './assets/videos/jbrecording.webm'
import rangerVid from './assets/videos/rangerrecord.webm'
import pspVid from './assets/videos/psprecord.webm'
import rename from './assets/images/rename.jpg'
import adenverVid from './assets/videos/adenverrecord.webm'
import resumeWord from './assets/Brent_Ogden_Resume.docx'
import resumePDF from './assets/Brent_Ogden_Resume.pdf'

const logotext = "BRENT OGDEN";

const meta = {
    title: "Brent Ogden | Front-End Developer & React Specialist",
    description: "Brent Ogden – Front-End Engineer specializing in React, JavaScript, and responsive UI/UX. Building polished, high-performance web experiences. ",
    
};

const introdata = {
    title: "I'm Brent Ogden",
    animated: {
        first: "transforming concepts into immersive web experiences",
        second: "optimizing workflows with precise, efficient code",
        third: "blending logic and creativity with Python and React",
        fourth: "creating visually appealing and intuitive web applications",
    },
    description: "I’m a tech-driven problem solver who thrives in fast-paced environments, whether working independently or collaborating with a team to reach shared goals. I take pride in learning new skills quickly and delivering efficient, accurate results. I’m always looking for opportunities to improve processes and workflows—and I’m not afraid to dive into new tools or technologies to make that happen.",
    your_img_url: profile,
};

const dataabout = {
    title: "Beyond the Resume",
    aboutme: "I’m Brent Ogden — a Colorado native born in Denver, with a passion for both technology and the outdoors. In my spare time, you’ll find me snowboarding in the winters, hiking in the summers, and cheering on my favorite teams. I’m a life-long, die-hard Denver Broncos fan, and from December through May, you’ll often find me at the 'Loud House' supporting the Colorado Mammoth. Professionally, I bring creativity, technical expertise, and a hands-on approach to every project I take on. I believe that success comes from balancing hard work with personal passion — which is why I’m always looking for opportunities that support both career growth and a healthy work-life balance. Whether building solutions, collaborating with teams, or tackling new challenges, I’m committed to helping my company succeed while still making time for the activities and passions that keep me energized ",
};
const worktimeline = [{
        id: 1,
        jobtitle: "Freelance Web Developer | Software Engineer",
        where: "Commerce City, CO",
        date: "Apr ‘25 – Present",
        jobDescription: "<li>Architected & Deployed a custom Shopify plugin for a landscape-supply client that calculates material costs and dynamically adjusts shipping rates—driving a 30% uplift in user engagement.</li><li>Developed Shopify apps and extensions for multiple clients, eliminating reliance on expensive third-party solutions and reducing ongoing platform costs.</li><li>Redesigned & Optimized the quote-request and lead-generation form for a garage-epoxy company—streamlining the user experience and boosting qualified leads by 25%.</li><li>Engineered Full-Stack Development of a responsive React/Tailwind CSS website for a Golden Retriever breeder, from wireframes through launch, to enhance brand presentation and site performance.</li>",
    },{
        id: 2,
        jobtitle: "Senior Software Engineer | Dish Network",
        where: "Littleton, CO",
        date: "Oct ‘22 – Nov '23",
        jobDescription: "<li>Spearheaded a project to design, research and develop a Python-based ML desktop application that was deployed to 148 users in the Legal department.</li><li>Earned a Quarterly Innovation Award for creating Python automation scripts to streamline time consuming manual processes and reduce workload from 1 week to a few hours.</li><li>Mentored junior engineers, improved processes, and facilitated contract management by configuring contract types and templates for end-users.</li><li>Resolved complex production application issues and verified process success by conducting audits on Contract Lifecycle Management projects.</li><li>Designed and implemented changes to the CLM software based on Business/Technical Requirements.</li><li>Provided expert guidance to business partners and other IT resources regarding application and process matters.</li><li>Prepared targeted documentation for executives and architecture teams, including design considerations, interface specifications, and proof-of-concepts.</li>",
    },
    {
        id: 3,
        jobtitle: "Configuration Analyst | Welltok/Virgin Pulse",
        where: "Denver, CO",
        date: "Jan ‘20 – Sep ‘22",
        jobDescription: "<li>Principle contact for the Business Analysts and Service Delivery Managers</li><li>Became the SME for our Airtable project management tool - created new processes/workflows and optimized existing ones - trained new and existing SDMS/BAs/etc. on how to use the tool</li><li>Ran/modified/created Python scripts to automate various aspects of the configuration process to streamline these very manual and time-consuming processes.</li><li>Wrote an in-depth process document outlining AirTable processes and functions.</li><li>Updated code on 60+ marketing pages for a chief client to accommodate our new look and feel and code structure.</li>",
    },
    {
        id: 4,
        jobtitle: "Associate Configuration Analyst | Welltok",
        where: "Denver, CO",
        date: "Oct ‘18 – Jan ‘20",
        jobDescription: "<li>Assisted in configuring assets and programs for client campaigns, using both proprietary CMS tools and HTML/CSS</li><li>Worked with BAs (Business Analysts) and SDMs (Service Delivery Managers) to ensure that client requirements were properly documented and realized in the final product.</li><li>Assisted the configuration team with the configuration of Jumbotrons, Promos, Marketing pages,Navigation items, ActionCards, etc. in alignment with the client's program designs.</li><li>Built a microsite to house training videos that I and the rest of the configuration team created</li>",
    },
    {
        id: 5,
        jobtitle: "Web Developer | First Data Corporation",
        where: "Greenwood Village, CO",
        date: "Apr ‘15 – Dec ‘17",
        jobDescription: "<li>Coded several websites using HTML5/Handlebars/PHP as well as 3rd party CMS tool - Adobe Experience Manager</li><li>Identified and suggested new technologies and tools for enhancing product value and increasing team productivity.</li><li>Maintained existing websites and design and deliver new responsive templates.</li><li>Converted several existing PHP websites for use with Static Platform - Apache server on AWS using Grunt/Handlebars</li><li>Converted PSD files provided by marketers into responsive, bootstrap-based HTML5 websites, utilizing several task runners and preprocessors - SASS/Grunt/Gulp</li>",
    },
    {
        id: 6,
        jobtitle: "Associate Web Program Manager | First Data Corporation",
        where: "Greenwood Village, CO",
        date: "Mar ‘13 – Apr ‘15",
        jobDescription: "<li>Administered the creation, support, and implementation of BoldChat, live chat provider used on 100's of sites.</li><li>Uploaded videos, create custom players, and handle administration of Brightcove to manage video content across 100's of sites.</li><li>Redesigned and administered SharePoint site for use by the Web Team</li><li>Purchased, configured, and transferred hundreds of domains - including submitting DNS requests and facilitating transfer of domains into centralized account.</li><li>One of two system admins for project management tool - Workfront - created new request forms for various teams within the organization to streamline processes and improve efficiencies.</li><li>Assisted with content management for various sites - using Adobe Experience Manager CMS tool.</li>",
    },
    {
        id: 7,
        jobtitle: "Quality Assurance Lead | National Cinemedia",
        where: "Centennial, CO",
        date: "Jul ‘11 – Mar ‘13",
        jobDescription: "<li>Performed regression testing and ongoing maintenance of all consumer-facing entities (7 websites, 2 mobile apps, and department SharePoint site)</li><li>Tested and maintained both mobile applications across both iOS and Android platforms.</li><li>Worked with the Project Management team, Content Administration team, and Interactive Development team continually from inception/discovery to completion.</li><li>Entered, tracked, monitored, and assigned tasks into TFS (Team Foundation Server) to facilitate workloads for all teams.</li><li>Ongoing communication with off-site mobile development team in Argentina to facilitate upgrades/enhancements/new functionality and resolve bugs - extensive use of Pivotal Tracker</li><li>In charge of crash report tracking, app store and website customer feedback, bi-weekly release highlight correspondence, and several other inter-department communications.</li>",
    },
    {
        id: 8,
        jobtitle: "Production Coordinator | National Cinemedia",
        where: "Centennial, CO",
        date: "Dec ‘05 – Aug ‘11",
        jobDescription: "<li>Managed the production process from start to finish (handling creative media/orders from point of receipt to finalization)</li><li>Administered most widely used database in the company (monitor and fix issues, make improvements/enhancements, handle questions, implement upgrades, etc.)</li><li>Created/maintained several reports in MS Access used by VPs and several other departments to monitor vital information.</li><li>Worked with small team to ensure 300 - 800 ads per week were completed, approved, and uploaded by the deadline.</li>",
    },
];

const skills = [{
        name: "Python",
        experience: "4",
        proficiency: "Intermediate",
        imageUrl: python,
    },
    {
        name: "HTML5",
        experience: "14",
        proficiency: "Advanced / Expert",
        imageUrl: html5,
    },
    {
        name: "Javascript",
        experience: "14",
        proficiency: "Intermediate",
        imageUrl: javascript,
    },
    {
        name: "React",
        experience: "4",
        proficiency: "Intermediate",
        imageUrl: react,
    },
    {
        name: "NodeJS",
        experience: "8",
        proficiency: "Intermediate",
        imageUrl: nodejs,
    },
    {
        name: "PHP",
        experience: "4",
        proficiency: "Intermediate",
        imageUrl: php,
    },
    {
        name: "GitHub",
        experience: "10",
        proficiency: "Intermediate",
        imageUrl: github,
    },
    {
        name: "CSS3",
        experience: "14",
        imageUrl: css3,
        proficiency: "Advanced / Expert",
    },
    {
        name: "TailwindCSS",
        experience: "2",
        proficiency: "Intermediate",
        imageUrl: tailwindcss,
    },
    {
        name: "Wordpress",
        experience: "4",
        proficiency: "Intermediate",
        imageUrl: wordpress,
    },
    {
        name: "JQuery",
        experience: "10",
        proficiency: "Intermediate",
        imageUrl: jquery,
    },
    {
        name: "Photoshop",
        experience: "14",
        proficiency: "Advanced",
        imageUrl: photoshop,
    },
    {
        name: "NPM",
        experience: "10",
        proficiency: "Intermediate",
        imageUrl: npm,
    },
    {
        name: "Vite",
        experience: "6",
        proficiency: "Intermediate",
        imageUrl: vite,
    },
    {
        name: "Bootstrap",
        experience: "14",
        proficiency: "Advanced",
        imageUrl: bootstrap,
    },
    {
        name: "Shopify",
        experience: "2",
        proficiency: "Novice",
        imageUrl: shopify,
    },
];

const services = [{
        title: "Responsive Web Design",
        description: "With several years of experience using Bootstrap, I specialize in building fully responsive websites that adapt seamlessly to any screen size. In today’s mobile-first world, I prioritize creating interfaces that are optimized for performance and usability across all devices.",
    },
    {
        title: "React",
        description: "Over the past several years, I’ve been dedicated to building projects with React, applying the skills I’ve developed through self-directed learning. I took the initiative to modernize several of my personal websites—rebuilding them from static HTML into dynamic, React-powered applications—to enhance functionality, maintainability, and user experience.",
    },
    {
        title: "Python",
        description: "Recently, I’ve been deeply involved in Python development across both my current and previous roles—leveraging it for everything from UI automation to full-scale application development. I’ve created numerous scripts to streamline repetitive tasks within web-based tools, and most notably, I deployed a desktop application now used department-wide by the Legal team.",
    },
    {
        title: "Adobe Experience Manager (AEM)",
        description: "I have hands-on experience working with Adobe Experience Manager (AEM), where I was responsible for creating, updating, and customizing website content. I also played a key role in localizing these sites, ensuring accurate translations and seamless experiences across multiple languages.",
    },
    {
        title: "Wordpress",
        description: "Early in my career, I focused on WordPress development and built custom marketing landing pages using PHP for various clients. Many of my initial personal projects were WordPress-based, and I also integrated PHP-driven contact forms across several sites to enhance user interaction and lead capture.",
    },
];

const dataportfolio = [{
    
        img: fantasy,
        video: fantasyVid,
        description: "A companion site for the two fantasy football leagues that I run - built in React with TailwindCSS.",
        link: "https://fantasycentral.co/",
    },
    {
        img: "https://i.ibb.co/1MBnX6r/jbsimplyclean.jpg",
        video: jbVid,
        description: "I built this professional, fully-responsive site for a friend's business. It has user account creation, password reset, and email functionality.",
        link: "https://jbsimplyclean.com/",
    },
    
    {
        
        img: "https://i.ibb.co/Kx3h1rf/portfolio.jpg",
        video: portfolioVid,
        description: "The first portfolio site that I built 6 years ago as a one page, highly-visual showcase of my work.",
        link: "",
    },
    {
        img: ranger,
        video: rangerVid,
        description: "Built in React using TailwindCSS, this is a site I built for someone who breeds Golden Retrievers.",
        link: "https://www.rangergoldenstud.com",
    },
    {
        img: '',
        video: pspVid,
        description: "Site for a consulting firm that needed a modern refresh. Incorporates modern design, parallax scrolling and animations.",
        link: "https://www.pspcompass.com",
    },
    {
        img: '',
        video: milehighmashupVid,
        description: "Site that I built in React utilizing TailwindsCSS and consuming APIs for scores, news and videos.",
        link: "https://www.milehighmashup.com",
    },
    {
        img: '',
        video: adenverVid,
        description: "WordPress landing page that was built as part of a large Denver-based roofing company's corporate site. It includes parallax effects and on-page form implementation.",
        link: "https://www.a-denverroofing.com/residential-roofing-lp",
    },
    // {
    //     img: '',
    //     video: denverSocialsVid,
    //     description: "Landing page for a local non-profit that hosts networking events and meetups with the proceeds going to local causes. Built in React using TailwindsCSS.",
    //     link: "https://denversocials.com",
    // },
  
    
    
    {
        img: "https://i.ibb.co/TrHYbx7/gyft-main-min.png",
        description: "A page that I built at a previous job using Adobe Experience Manager and custom CSS/JS.",
        link: "https://merchants.fiserv.com/en-us/products/merchants/gift-and-payroll-card-solutions/gift-card-solutions/?utm_source=firstdataus",
    },
    
    
    {
        img: "https://i.ibb.co/dsvcT0V/US-Debit-Card-Home-Page-Bureau-of-the-Fiscal-Service-U-S-Department-of-the-Treasury.jpg",
        description: "A client-specific microsite that I built for a previous job using PHP. Design was submitted through outside agency.",
        link: "https://www.usdebitcard.gov/",
    },

    // 
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "ogden87@gmail.com",
    YOUR_FONE: "720.254.5354",
    description: "If you have any questions about my work or my resume, please reach out. I would love to discuss any potential opportunities.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_fhpw2pr",
    YOUR_TEMPLATE_ID: "template_ozgs3c2",
    YOUR_USER_ID: "DdNlb65683piFw_G_",
};

const socialprofils = {
    github: "https://github.com/BrentOgden",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/brent-ogden-70398012",
    // instagram: "https://instagram.com/MileHiRocks5280",
    resumePDF,
    resumeWord,
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};