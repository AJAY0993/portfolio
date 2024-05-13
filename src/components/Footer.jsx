import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="m-auto mx-2  my-6  max-w-[72rem] rounded-full bg-neutral-less-dark px-3 py-2 lg:block">
      <ul className="m-auto flex items-center justify-end gap-4 tracking-wide">
        <li className="mr-auto text-neutral-50">
          <span>Let's Connect</span>
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
    </footer>
  );
}

export default Footer;
