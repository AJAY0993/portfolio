import Heading from "./Heading";
import Project from "./Project";
import Strong from "./Strong";
const projects = [
  {
    title: "Social Media App",
    id: "project1",
    video: "socialMediaApp.mp4",
    code: "https://github.com/AJAY0993/Video-library-Frontend",
    live: "https://video-library-frontend.vercel.app",
  },
  {
    title: "Video Library App",
    id: "project2",
    video: "videoLibrary.mp4",
    code: "",
    live: "",
  },
  {
    title: "E Comm App",
    id: "project3",
    video: "shopCO.mp4",
    code: "",
    live: "",
  },
];

function Projects() {
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
      </div>
    </section>
  );
}

export default Projects;
