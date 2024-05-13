import { FaCode, FaLink } from "react-icons/fa";
import Heading from "./Heading";

function Project({ project, children }) {
  return (
    <div>
      <Heading type="secondary">{project.title}</Heading>
      <div className="flex flex-wrap justify-between gap-4 ">
        <div className="px-2">
          <ul className="list-disc">{children}</ul>
          <div className="flex items-center gap-4">
            <a
              className=" text-neutral-lighter flex w-fit basis-24 items-center gap-2 rounded-3xl border-[1px] border-transparent bg-secondary bg-opacity-30 px-4 py-2 hover:border-purple-600"
              href={project.code}
              target="_blank"
            >
              <FaCode className="text-neutral-lighter inline-block bg-transparent" />{" "}
              Code
            </a>
            <a
              className=" text-neutral-lighter min-w-26 flex w-fit items-center gap-2 rounded-3xl border-[1px] border-transparent bg-secondary bg-opacity-30 px-4 py-2 hover:border-purple-600"
              href={project.live}
              target="_blank"
            >
              <FaLink className="text-neutral-lighter inline-block bg-transparent" />{" "}
              Live
            </a>
          </div>
        </div>
        <div className="flex aspect-video w-[30rem] items-center justify-center self-center overflow-hidden rounded-lg border-2 border-primary p-2">
          <video
            preload="metadata"
            src={project.video}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
}

Project.ListItem = function ProjectListItem({ children }) {
  return (
    <li className="text-neutral-lighter my-2 max-w-[58ch] font-thin leading-10 lg:my-11 lg:text-xl">
      {children}
    </li>
  );
};

export default Project;
