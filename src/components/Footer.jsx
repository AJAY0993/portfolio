import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <footer className=" z-10 my-6 px-2">
      <ul className="m-auto flex  max-w-[72rem] items-center justify-end gap-4 rounded-full bg-neutral-less-dark px-3 py-2 tracking-wide">
        <li className="mr-auto text-neutral-50">
          <span>Let&apos;s Connect</span>
        </li>
        <li>
          <a
            className=" text-lg font-medium "
            href="https://www.linkedin.com/in/ajay-prakash-mishra-638b23259/"
            target="_blank"
          >
            <FaLinkedin className=" text-blue-800 transition-all hover:text-blue-900 " />
          </a>
        </li>
        <li>
          <a
            className=" text-lg font-medium "
            href="https://twitter.com/AjayPra88777142"
            target="_blank"
          >
            <FaTwitter className=" text-blue-500 transition-all hover:text-blue-600" />
          </a>
        </li>
        <li>
          <a
            className=" text-lg font-medium "
            href="https://buymeacoffee.com/ajaymishra0"
            target="_blank"
          >
            <CiCoffeeCup className=" text-yellow-500 transition-all hover:text-yellow-600" />
          </a>
        </li>
        <li>
          <a
            className=" text-lg font-medium "
            href="mailto:ajaymishra5277919886@gmail.com"
            target="_blank"
          >
            <BiLogoGmail className=" text-red-500 transition-all hover:text-red-600" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
