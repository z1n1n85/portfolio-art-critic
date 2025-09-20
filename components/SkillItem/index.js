const SkillItem = ({ skill }) => {
  return (
    <div
      className="flex flex-col tablet:flex-row w-full gap-4"
    >
      <h3 className="block tablet:w-[50%] text-2xl font-medium">{skill.name}</h3>
      <p className="block tablet:w-[50%] text-xl text-primary text-opacity-50">
        {skill.description}
      </p>
    </div>
  );
};

export default SkillItem;
