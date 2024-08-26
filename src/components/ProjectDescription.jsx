import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLogOut, IoMdClose } from "react-icons/io";

function ProjectDescription({ close, project }) {
  const [startY, setStartY] = useState(0);
  const descRef = useRef(null);
  const bgRef = useRef(null);
  const goBack = () => {
    if (descRef.current) {
      descRef.current.style.transform = "translateY(100%)";
      bgRef.current.classList.remove("backdrop-blur-md");
    }
    setTimeout(close, 300);
  };

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = endY - startY;

    if (deltaY > 50) {
      goBack();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 h-screen w-full overflow-auto backdrop-blur-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={bgRef}
    >
      <button
        className="fixed right-4 top-4 text-xl font-semibold text-neutral-50"
        onClick={goBack}
      >
        <IoMdClose />
      </button>
      <div
        className="m-auto mt-32 h-auto w-full max-w-[600px] translate-y-full overflow-hidden rounded-t-lg bg-stone-800 pb-4 transition-all duration-300 ease-in-out"
        ref={descRef}
      >
        {project?.video && (
          <video
            className="aspect-video w-full object-cover"
            preload="metadata"
            src={project.video}
            autoPlay
            loop
            muted
          ></video>
        )}
        <div className="p-4">
          <h2 className="2xl font-bold text-neutral-50 lg:text-3xl">
            {project.title}
          </h2>
          <div className="mt-2 text-primary">
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
                className="flex cursor-pointer items-center gap-2 font-medium text-primary hover:underline"
                href={project.code}
              >
                <FaGithub /> Source Code
              </a>
              {project?.live && (
                <a
                  className="flex cursor-pointer items-center gap-2 font-medium text-primary hover:underline"
                  href={project.live}
                >
                  <IoIosLogOut /> Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescription;
