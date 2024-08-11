import Heading from "./Heading";
import Skill from "./Skill";
const frontend = [
  {
    name: "HTML",
    border: "border-[1px] border-orange-400",
    id: "frontend1",
  },
  {
    name: "CSS",
    border: "",
    id: "frontend2",
  },
  {
    name: "Javascript",
    border: "border-[1px] border-yellow-500",
    id: "frontend3",
  },
  {
    name: "Typescript",
    border: "border-[1px] border-blue-500",
    id: "frontend4",
  },
  {
    name: "React",
    border: "border-[1px] border-blue-700",
    id: "frontend5",
  },
  {
    name: "Next.js",
    border: "border-[1px] border-white",
    id: "frontend5",
  },
];

const backend = [
  {
    name: "Node.js/Express.js",
    border: "border-[1px] border-green-400",
  },
  {
    name: "Hono",
    border: "border-[1px] border-orange-400",
  },
  {
    name: "SocketIO",
    border: "border-[1px] border-gray-100",
  },
];

const database = [
  {
    name: "MongoDB",
    border: "border-[1px] border-green-400",
    id: "databas1",
  },
  {
    name: "Postgres",
    border: "border-[1px] border-blue-300",
    id: "database2",
  },
  {
    name: "Redis",
    border: "border-[1px] border-red-500",
    id: "databas3",
  },
];

const devops = [
  {
    name: "Github actions",
    border: "border-[1px] border-gray-500",
    id: "devTools1",
  },
  {
    name: "Docker",
    border: "border-[1px] border-blue-700",
    id: "devTools2",
  },
  {
    name: "Aws",
    border: "border-[1px] border-yello-700",
    id: "devTools3",
  },
];
function Skills() {
  return (
    <section
      className="mt-8 border-t-[1px] border-neutral-light px-4 lg:mt-16 lg:px-9"
      id="skills"
    >
      <Heading>Skills</Heading>
      <div className="flex flex-wrap gap-16 pt-16">
        <Skill title="Frontend" skills={frontend} />
        <Skill title="Backend" skills={backend} />
        <Skill title="Database Management" skills={database} />
        <Skill title="Dev ops" skills={devops} />
      </div>
    </section>
  );
}

export default Skills;
