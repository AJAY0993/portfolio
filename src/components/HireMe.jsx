import { forwardRef, useEffect, useRef } from "react";
import { ValidationError, useForm } from "@formspree/react";
import Button from "./Button";
import Heading from "./Heading";
import toast from "react-hot-toast";

function HireMe() {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const [state, handleSubmit] = useForm(endpoint);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const regex = /^\d{10}$/;

    if (!regex.test(phoneRef.current.value)) {
      return toast.error("Phone number is not valid!");
    }

    handleSubmit();
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for contacting me");
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    }
  }, [state.succeeded]);

  return (
    <section className="mt-8 border-t-[1px] border-neutral-light lg:mt-16">
      <Heading>Hire me</Heading>

      <Heading type="secondary">Lets have a chat</Heading>
      <div className="p-4 lg:p-9">
        <form
          className="m-auto max-w-[40rem] flex-wrap gap-4 space-y-4 rounded-md border-b-2 border-secondary bg-neutral-dark p-4 text-neutral-50 lg:space-y-8 lg:p-8"
          onSubmit={submitForm}
        >
          <div className="flex  flex-wrap gap-4">
            <Input
              type="text"
              placeholder="Enter your first name"
              ref={firstNameRef}
              state={state}
              name="firstName"
            />
            <Input
              type="text"
              placeholder="Enter your last name"
              value=""
              name="lastName"
              ref={lastNameRef}
              state={state}
            />
          </div>

          <div className="flex  flex-wrap gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value=""
              name="email"
              ref={emailRef}
              state={state}
            />
            <Input
              type="tel"
              placeholder="Enter your mobile no"
              value=""
              name="phone"
              ref={phoneRef}
              state={state}
            />
          </div>
          <div>
            <textarea
              className="min-h-48 w-full rounded-lg border-[1px] border-secondary bg-transparent px-2 py-2 text-inherit placeholder:font-thin placeholder:text-neutral-light focus:border-purple-700 focus:outline-0"
              name="message"
              placeholder="Enter your message here"
              ref={messageRef}
              required
            />
          </div>
          <Button
            stretch={true}
            styles="!text-neutral-100 bg-neutral-darker border-2 border-secondary active:border-purple-700"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ type, placeholder, name, state }, ref) => {
  return (
    <div className="min-w-60 flex-grow">
      <input
        className="w-full rounded-md  border-[1px] border-secondary bg-transparent px-2 py-2 placeholder:font-thin placeholder:text-neutral-light focus:border-purple-700 focus:outline-0"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>
  );
});
export default HireMe;
