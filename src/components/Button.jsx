function Button({
  children,
  onClick,
  stretch,
  center,
  type = "primary",
  styles,
}) {
  if (type === "primary")
    return (
      <button
        className={`relative rounded-full bg-neutral-50 px-4 py-2 font-medium text-neutral-darker ${stretch && "w-full"} ${styles}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  if (type === "secondary")
    return (
      <button
        className="relative rounded-full border-2 border-transparent bg-neutral-less-dark px-4 py-2 font-medium text-neutral-50 hover:border-primary focus:border-primary"
        onClick={onClick}
      >
        {children}
      </button>
    );
  if (type === "text")
    return (
      <button
        className={`${center ? "m-auto block" : ""} relative  w-fit rounded-full border-2 border-transparent px-4  py-2 font-medium text-neutral-50 hover:bg-neutral-dark`}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Button;
