import Heading from "./Heading";
import Skill from "./Skill";
const skills = [
  { name: "HTML", icon: "./icons/html.png" },
  { name: "CSS", icon: "./icons/css.png" },
  { name: "Tailwind", icon: "./icons/tailwind.png" },
  { name: "JavaScript", icon: "./icons/javascript.png" },
  { name: "TypeScript", icon: "./icons/typescript.png" },
  { name: "React", icon: "./icons/react.png" },
  { name: "Node.js", icon: "./icons/nodejs.png" },
  { name: "Express.js", icon: "./icons/express.png" },
  { name: "Mongo DB", icon: "./icons/mongo-db.png" },
  { name: "Postgres", icon: "./icons/postgresql.png" },
  { name: "Prisma", icon: "./icons/prisma.png" },
  { name: "Redis", icon: "./icons/redis.png" },
  { name: "Git", icon: "./icons/git.png" },
  { name: "Docker", icon: "./icons/docker.webp" },
  { name: "Socket IO", icon: "./icons/socket-io.png" },
];

function Skills() {
  return (
    <section
      className="mt-8 border-t-[1px] border-neutral-light px-4 lg:mt-16 lg:px-9"
      id="skills"
    >
      <Heading>Skills</Heading>
      <SkillList />
    </section>
  );
}

const SkillList = () => {
  return (
    <div className="relative m-auto mt-16 flex max-w-[900px] flex-wrap justify-between gap-8 rounded-xl bg-white/10 p-4 backdrop-blur-lg lg:gap-12 lg:gap-x-28 lg:p-8">
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
};

export default Skills;
