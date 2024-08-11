function Skill({ title, skills }) {
  return (
    <div className="mx-auto min-w-32  max-w-48 self-start rounded-lg  bg-neutral-less-dark px-4 py-2 pb-6">
      <h4 className="my-4 flex-grow-0 text-neutral-50">{title}</h4>
      <ul className=" x flex flex-wrap gap-4 text-neutral-200">
        {skills.map((skill) => (
          <SkillListItem
            skill={skill.name}
            border={skill.border}
            key={skill.id}
          />
        ))}
      </ul>
    </div>
  );
}

function SkillListItem({ skill, border = "" }) {
  return (
    <li className={`rounded-lg bg-neutral-dark px-2 py-1 text-sm ${border}`}>
      {skill}
    </li>
  );
}

export default Skill;
