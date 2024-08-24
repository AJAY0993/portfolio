import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Vid Vault",
    intro:
      "A full-stack app built with Express and React, featuring authentication, video filters, and playlists.",
    techStack: ["Javascript", "React", "Nodejs", "MongoDB"],
    description: [
      "Developed a full-stack web application using Express for the backend and React for the frontend.",

      "Built a REST API with Express to serve the frontend application.",

      "Implemented a robust authentication system to ensure secure access control.",

      "Used encryption techniques to enhance security measures for user authentication.",

      "Created filtering options to enable users to discover videos based on genres and search queries.",

      "Enabled users to create and manage playlists, track watch history, and share videos seamlessly.",
    ],
    video: "project-videos/videoLibrary.mp4",
    image: "project-images/vid-vault.png",
    code: "https://github.com/AJAY0993/Video-library-Frontend",
    live: "https://video-library-frontend.vercel.app",
    id: "project1",
  },
  {
    title: "Social hub",
    intro:
      "Developed a comprehensive social media app with real-time chat and dynamic navigation features.",
    description: [
      "Developed a fully functional social media application, showcasing proficiency in front-end and back-end development, database management, and user experience design.",

      "Utilized React Router for seamless navigation, ensuring a smooth and intuitive user experience.",

      "Employed React Query for efficient server state management, simplifying data fetching, caching, and synchronization while reducing boilerplate code.",

      "Integrated live chat functionality for real-time communication between users, using Socket.IO to enable seamless interactions.",

      "Focused on delivering a robust and user-friendly application that meets modern web standards.",
    ],
    techStack: [
      "React",
      "Redux",
      "React query",
      "Socket IO",
      "Nodejs",
      "MongoDB",
    ],
    video: "project-videos/socialMediaApp.mp4",
    image: "project-images/social-hub.png",
    code: "https://github.com/AJAY0993/Social-media-App",
    live: "https://social-media-app-f3lq.onrender.com",
    id: "project2",
  },
  {
    title: "E Comm App",
    intro:
      "Developed a user-friendly e-commerce app with advanced search, secure payments, filtering, sorting options, and Stripe integration.",
    description: [
      "Developed a user-friendly e-commerce app with features like product search, secure payments, and customer reviews.",

      "Implemented filters such as category, discounts, and ratings to help users find what they need easily.",

      "Added sorting options to enhance product search and selection.",

      "Integrated Stripe for safe and hassle-free transactions during customer purchases.",
    ],
    techStack: [
      "React",
      "Redux",
      "React query",
      "Tailwind",
      "Stripe API",
      "Express.js",
      "MongoDB",
    ],
    video: "project-videos/shopCO.mp4",
    image: "project-images/shop-co.png",
    code: "https://github.com/AJAY0993/Shop.co",
    live: "https://shopco-production.up.railway.app",
    id: "project3",
  },
  {
    title: "Cafe",
    intro:
      "Created a movie app using vanilla CSS and JavaScript with features for trending genres, favorites, search, and pagination.",
    description: [
      "No Frameworks: Purely made using vanilla CSS and JavaScript.",

      "Trending Section: Browse movies/TV shows by genres such as Action, Adventure, Comedy, Drama, etc.",

      "Favorites: Save your favorite movies/TV shows for quick access.",

      "Search: Search for specific movies or shows using keywords.",

      "Pagination: Navigate through multiple pages of search results.",
    ],
    techStack: ["HTML", "CSS", "Javacript"],
    video: "project-videos/cafe.mp4",
    image: "project-images/cafe.png",
    code: "https://github.com/AJAY0993/CAFE",
    live: "https://cafe-omega-ecru.vercel.app",
    id: "project4",
  },
  {
    title: "Storywave",
    intro:
      "Built a secure, serverless app with JWT authentication, article management, responsive design, and support for dark and light modes.",
    description: [
      "Sign Up/Login: Users can create accounts and log in using JWT for secure authentication.",
      "Create: Authenticated users can write and edit articles.",
      "Read Articles: Users can browse and read published articles.",
      "Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.",
    ],
    techStack: [
      "Typescript",
      "Tailwind",
      "React",
      "Redux",
      "Hono",
      "Postgresql",
    ],
    video: "project-videos/storywave.mp4",
    image: "project-images/story-wave.png",
    code: "https://github.com/AJAY0993/storywave",
    live: "https://storywave.vercel.app",
    id: "project5",
  },
];

function Projects() {
  return (
    <section
      className="mt-8 border-t-[1px] border-neutral-light px-4 lg:mt-16 lg:px-9 "
      id="projects"
    >
      <Heading>Projects</Heading>
      <div className="m-auto mt-16 flex w-full max-w-[850px] flex-wrap justify-center gap-20">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
