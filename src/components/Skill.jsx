import { useEffect, useRef, useState } from "react";

function Skill({ name, icon }) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      const nameElement = ref.current.querySelector("span");
      nameElement.style.transform = "translateX(10px)";
      nameElement.style.visibility = "visible";
      nameElement.style.opacity = "1";
      nameElement.style.transition = "opacity 0.5s, transform 0.5s";
    };

    const handleMouseLeave = () => {
      const nameElement = ref.current.querySelector("span");
      nameElement.style.opacity = "0";
      nameElement.style.transform = "translateX(0)";
      nameElement.style.transition = "opacity 0.5s, transform 0.5s";
    };

    const handleScroll = () => {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && !inView) {
        setInView(true);
        element.classList.remove("animate-bounce-out");
        element.classList.add("animate-bounce-in");
      } else if (!isInView && inView) {
        setInView(false);
        element.classList.remove("animate-bounce-in");
        element.classList.add("animate-bounce-out");
      }
    };

    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      ref.current.removeEventListener("mouseenter", handleMouseEnter);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  return (
    <div
      className="w-[20%] text-center text-neutral-50 md:w-[15%] lg:w-[6%]"
      ref={ref}
    >
      <img
        className="center m-auto aspect-square h-12 cursor-pointer object-contain lg:h-16"
        src={icon}
      />
      <span className="invisible transition-all">{name}</span>
    </div>
  );
}

export default Skill;
