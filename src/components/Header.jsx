import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 hidden h-24 bg-opacity-50 backdrop-blur-lg lg:block"></div>
      <header className="sticky left-1/2 top-6 m-auto hidden w-[38.8rem] -translate-x-1/2 rounded-full bg-neutral-less-dark px-3 py-6 lg:block">
        <ul className="flex items-center justify-around tracking-wide">
          <li>
            <a
              className="text-lg font-medium capitalize text-white active:text-primary"
              href="#about"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium capitalize text-white active:text-primary"
              href="#skills"
            >
              skills
            </a>
          </li>
          <li>
            <a
              className="text-lg font-medium capitalize text-white active:text-primary"
              href="#projects"
            >
              projects
            </a>
          </li>
          <li>
            <a
              className=" text-lg font-medium text-secondary"
              href="https://github.com/AJAY0993"
              target="_blank"
            >
              <FaGithub className=" text-secondary transition-all hover:text-primary" />
            </a>
          </li>
          <li>
            <a
              className=" text-lg font-medium text-secondary"
              href="https://www.linkedin.com/in/ajay-prakash-mishra-638b23259/"
              target="_blank"
            >
              <FaLinkedin className=" text-secondary transition-all hover:text-primary " />
            </a>
          </li>
          <li>
            <a
              className=" text-lg font-medium text-secondary"
              href="https://twitter.com/AjayPra88777142"
              target="_blank"
            >
              <FaTwitter className=" text-secondary transition-all hover:text-primary" />
            </a>
          </li>
          <li>
            <a
              className=" text-lg font-medium text-secondary"
              href="mailto:ajaymishra5277919886@gmail.com"
              target="_blank"
            >
              <FaEnvelope className=" text-secondary transition-all hover:text-primary" />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
