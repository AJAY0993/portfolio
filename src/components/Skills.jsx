import Heading from "./Heading";
import Skill from "./Skill";
const languages = [
  {
    name: "HTML",
    border: "",
    id: "language1",
  },
  {
    name: "CSS",
    border: "",
    id: "language2",
  },
  {
    name: "Javascript",
    border: "border-[1px] border-yellow-500",
    id: "language3",
  },
  {
    name: "Typescript",
    border: "border-[1px] border-blue-500",
    id: "language4",
  },
  {
    name: "SQL",
    border: "",
    id: "language5",
  },
];

const frameworks = [
  {
    name: "React js",
    border: "border-[1px] border-blue-600",
  },
  {
    name: "Node/Express js",
    border: "border-[1px] border-green-400",
  },
  {
    name: "Next js",
    border: "border-[1px] border-neutral-100",
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

const devTools = [
  {
    name: "Git/Github",
    border: "border-[1px] border-gray-500",
    id: "devTools1",
  },
  {
    name: "VS Code",
    border: "border-[1px] border-blue-700",
    id: "devTools2",
  },
  {
    name: "Figma",
    border: "border-[1px] border-neutral-50",
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
        <Skill title="Languages" skills={languages} />
        <Skill title="Frameworks" skills={frameworks} />
        <Skill title="Database Management" skills={database} />
        <Skill title="Developer Tools" skills={devTools} />
        <Skill
          title="Libraries"
          skills={[{ name: "Tailwind", border: "border-[1px] border-sky-300" }]}
        />
      </div>
    </section>
  );
}

export default Skills;
