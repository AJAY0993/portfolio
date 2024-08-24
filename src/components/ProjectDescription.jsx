import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLogOut, IoMdClose } from "react-icons/io";

function ProjectDescription({ close, project }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen w-full  overflow-auto backdrop-blur-md">
      <button
        className="fixed right-4 top-4 text-xl font-semibold text-neutral-50"
        onClick={close}
      >
        <IoMdClose />
      </button>
      <div className="m-auto mt-32 h-auto w-full max-w-[600px] overflow-hidden rounded-t-lg bg-stone-800 pb-4">
        <video
          className="aspect-video w-full object-cover  "
          preload="metadata"
          src={project.video}
          autoPlay
          loop
          muted
        ></video>
        <div className="p-4">
          <h2 className="2xl font-bold text-neutral-50 lg:text-3xl">
            {project.title}
          </h2>
          <div className=" mt-2 text-primary">
            {project.techStack.join(", ")}
          </div>
          <ul className="mt-4 list-none">
            {project.description.map((d, i) => (
              <React.Fragment key={i}>
                <li className="text-neutral-50">{d}</li>
                <br />
              </React.Fragment>
            ))}
          </ul>

          <div>
            <h4 className="xl font-bold text-neutral-50 lg:text-2xl">
              Project links
              <span className="text-primary"> .</span>
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                className="flex  cursor-pointer items-center gap-2 font-medium text-primary hover:underline"
                href={project.code}
              >
                <FaGithub /> Source Code
              </a>
              <a
                className="flex  cursor-pointer items-center gap-2 font-medium text-primary hover:underline"
                href={project.live}
              >
                <IoIosLogOut /> Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
