const SkillItem = ({ skill, index = 0, dark = false }) => (
  <article className="grid gap-2 py-4 tablet:grid-cols-[2.25rem_1fr] tablet:gap-4">
    <span className="accent-text title-font text-lg italic">0{index + 1}</span>
    <div>
      <h3 className="text-lg font-bold leading-snug tablet:text-xl">{skill.name}</h3>
      <p className={`mt-2 text-base leading-relaxed ${dark ? "text-paper/60" : "text-ink/60"}`}>{skill.description}</p>
    </div>
  </article>
);

export default SkillItem;
