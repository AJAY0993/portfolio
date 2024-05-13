function Heading({ children, type = "primary" }) {
  if (type === "primary")
    return (
      <h2 className="my-8 text-center text-2xl font-semibold uppercase tracking-[.5em] text-neutral-light lg:text-5xl lg:tracking-[1em]">
        {children}
      </h2>
    );
  if (type === "secondary")
    return (
      <h2 className=" mt-4 text-center text-xl font-semibold tracking-wide text-white lg:mt-8 lg:text-4xl">
        {children}
      </h2>
    );
}

export default Heading;
