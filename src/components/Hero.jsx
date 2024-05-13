import { FaCode } from "react-icons/fa";
import Button from "./Button";
import Strong from "./Strong";

function Hero() {
  const downloadCV = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "resume.pdf";
    downloadLink.download = "Ajay_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section className=" lg:mt-16" id="about">
      <div className="flex flex-wrap justify-around gap-8 p-4 lg:p-9">
        <div>
          <h1 className=" text-6xl text-white lg:mt-8">Hi, I am Ajay</h1>
          <p className="my-11 max-w-[58ch] font-thin leading-10 text-neutral-lighter lg:text-xl">
            Creative, <Strong>detail-oriented</Strong>, software engineer with a{" "}
            <Strong> deep interest in AI</Strong>. Proven track record of
            creating and implementing successful{" "}
            <Strong>front and back end</Strong> web applications. I enjoy
            working <Strong>MERN</Strong> stack. Looking to bring my skills to a
            tech company with global reach.
          </p>
          <div className="flex items-center gap-4">
            <Button onClick={downloadCV}>Download CV</Button>
            <Button
              type="secondary"
              onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
              }}
            >
              Hire me
            </Button>
          </div>
        </div>
        <div className="fancyBorderRadius max-f-full order-first flex aspect-square h-80 items-center justify-center bg-purple-600 bg-gradient-to-br from-purple-600 to-gray-900 lg:order-last">
          <FaCode className="text-[10rem] text-neutral-50" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
