import { AiFillMessage } from "react-icons/ai";

function ContactMeButton() {
  return (
    <button
      className="fixed bottom-8 right-8 flex aspect-square h-8 items-center justify-center rounded-full border-0 bg-neutral-50 outline-none lg:h-12 lg:w-12"
      onClick={() => {
        window.scrollTo(0, document.body.scrollHeight);
      }}
    >
      <AiFillMessage className="lg:text-2xl" />
    </button>
  );
}

export default ContactMeButton;
