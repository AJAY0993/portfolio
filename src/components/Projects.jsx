import { useState } from "react";
import Heading from "./Heading";
import Project from "./Project";
import Strong from "./Strong";
import Button from "./Button";
const projects = [
  {
    title: "Social Media App",
    id: "project1",
    video: "socialMediaApp.mp4",
    code: "https://github.com/AJAY0993/Social-media-App",
    live: "https://social-media-app-f3lq.onrender.com",
  },
  {
    title: "Video Library App",
    id: "project2",
    video: "videoLibrary.mp4",
    code: "https://github.com/AJAY0993/Video-library-Frontend",
    live: "https://video-library-frontend.vercel.app",
  },
  {
    title: "E Comm App",
    id: "project3",
    video: "shopCO.mp4",
    code: "https://github.com/AJAY0993/Shop.co",
    live: "https://shopco-production.up.railway.app",
  },
  {
    title: "Cafe",
    id: "project4",
    video: "cafe.mp4",
    code: "https://github.com/AJAY0993/CAFE",
    live: "cafe-omega-ecru.vercel.app",
  },
  {
    title: "Storywave",
    id: "project5",
    video: "storywave.mp4",
    code: "https://github.com/AJAY0993/storywave",
    live: "storywave.vercel.app",
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      className="mt-8 border-t-[1px] border-neutral-light px-4 lg:mt-16 lg:px-9 "
      id="projects"
    >
      <Heading>Projects</Heading>
      <div className="flex flex-col gap-16 divide-y-2 p-4 lg:p-9">
        <Project project={projects[0]} key={projects[0].id}>
          <Project.ListItem>
            Developed a fully functional social media application, demonstrating
            proficiency in <Strong>front-end</Strong> and{" "}
            <Strong>back-end development, database management</Strong>, and user
            experience design.
          </Project.ListItem>
          <Project.ListItem>
            {" "}
            I utilized <Strong>React Router</Strong> for seamless navigation,
            ensuring a smooth user experience. <Strong>React Query</Strong> for
            managing server state which not only simplified data fetching,
            caching, and synchronization but also significantly cut down on
            boilerplate code.
          </Project.ListItem>
          <Project.ListItem>
            Integrated <Strong>live chat</Strong> functionality for seamless
            real-time communication between users, utilizing{" "}
            <Strong>Socket.IO</Strong>.
          </Project.ListItem>
        </Project>

        <Project project={projects[1]} key={projects[1].id}>
          <Project.ListItem>
            Developed a full-stack web application using with{" "}
            <Strong>Express</Strong> serving a <Strong>REST API</Strong> with{" "}
            <Strong>React</Strong> as the frontend.
          </Project.ListItem>
          <Project.ListItem>
            {" "}
            Implemented a robust <Strong>authentication system</Strong> to
            ensure secure access control and user authentication with{" "}
            <Strong>encryption techniques</Strong> to enhance security measures.
          </Project.ListItem>
          <Project.ListItem>
            Created <Strong>filtering</Strong> options enabling users to
            discover videos based on genres, and search queries. and enabled
            users to create and manage{" "}
            <Strong>playlists, track watch history</Strong>, and seamlessly
            share videos.
          </Project.ListItem>
        </Project>

        <Project project={projects[2]} key={projects[2].id}>
          <Project.ListItem>
            Developed a user-friendly e-commerce app with handy features like
            easy{" "}
            <Strong>
              product search, secure payments, and customer reviews
            </Strong>
            .
          </Project.ListItem>
          <Project.ListItem>
            Made it simple for users to find what they need with{" "}
            <Strong>filters</Strong> like{" "}
            <Strong>category, discounts, and ratings</Strong>, plus{" "}
            <Strong>sorting</Strong>
            options.
          </Project.ListItem>
          <Project.ListItem>
            Integrated <Strong>Stripe</Strong> for safe and hassle-free
            transactions when customers make purchases.
          </Project.ListItem>
        </Project>
        {showMore && (
          <>
            <Project project={projects[3]} key={projects[3].id}>
              <Project.ListItem>
                <Strong>No Franeworks:</Strong>Purely made in vanilla CSS and
                Javascript
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Trending Section:</Strong> Browse movies/TV shows by
                genres such as Action, Adventure, Comedy, Drama, etc.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Favorites:</Strong> Save your favorite movies/TV shows
                for quick access.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Search:</Strong> Search for specific movies or shows
                using keywords.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Pagination:</Strong>Navigate through multiple pages of
                search results.
              </Project.ListItem>
            </Project>
            <Project project={projects[4]} key={projects[4].id}>
              <Project.ListItem>
                <Strong>Sign Up/Login:</Strong> Users can create accounts and
                log in using JWT for secure authentication.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Create:</Strong> Authenticated users can write and edit
                articles.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Read Articles:</Strong> Users can browse and read
                published articles.
              </Project.ListItem>
              <Project.ListItem>
                <Strong>Responsive Design:</Strong> The app is designed to work
                seamlessly on both desktop and mobile devices.
              </Project.ListItem>
            </Project>
          </>
        )}
      </div>
      {
        <Button
          type="text"
          center={true}
          onClick={() => setShowMore((s) => !s)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      }
    </section>
  );
}

export default Projects;
