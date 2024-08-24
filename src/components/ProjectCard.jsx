import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { PiCaretRight } from "react-icons/pi";
import ProjectDescription from "./ProjectDescription";

function ProjectCard({ project }) {
  const [showDescription, setShowDescription] = useState(false);
  const show = () => setShowDescription(true);
  const close = () => setShowDescription(false);
  return (
    <div className="mt-4 w-full max-w-96 overflow-hidden rounded-lg lg:mt-8">
      <div className="flex aspect-video  w-full items-end justify-center overflow-hidden bg-neutral-900">
        <img
          className="tilt-animation aspect-video w-[22rem] translate-y-4 cursor-pointer rounded-md"
          src={project.image}
          onClick={show}
        />
      </div>
      <div className="mt-2 flex items-center gap-2">
        <h4 className="text-2xl font-bold text-neutral-50">{project.title}</h4>
        <div className="h-[1px] flex-grow bg-neutral-600"></div>
        <a href={project.code}>
          <FaGithub className="cursor-pointer text-2xl font-bold text-neutral-400 hover:text-neutral-100" />
        </a>
        <a href={project.live}>
          <IoIosLogOut className="cursor-pointer text-2xl font-bold text-neutral-400 hover:text-neutral-100" />
        </a>
      </div>
      <div className=" mt-2 text-primary">{project.techStack.join(", ")}</div>
      <div className="mt-2">
        <p className="text-lg font-light tracking-wide text-neutral-200">
          {project.intro}
          <button
            className="cursor-pointer font-normal text-primary hover:underline"
            onClick={show}
          >
            {" "}
            Learn more <PiCaretRight className="inline-block -translate-x-1 " />
          </button>
        </p>
      </div>
      {showDescription && (
        <ProjectDescription close={close} project={project} />
      )}
    </div>
  );
}

export default ProjectCard;
