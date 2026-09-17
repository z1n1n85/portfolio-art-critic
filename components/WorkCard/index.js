const WorkCard = ({ project, index = 0 }) => (
  <article>
    {project.image && (
      <figure className="bg-white p-5 tablet:p-8">
        <img
          alt={project.title}
          className="aspect-[4/5] w-full object-contain transition duration-700 hover:scale-[1.012]"
          src={project.image}
        />
      </figure>
    )}
    <div className="grid grid-cols-[2.25rem_1fr] gap-3 py-4">
      <span className="accent-text title-font italic">0{index + 1}</span>
      <div>
        <h3 className="text-2xl font-bold leading-tight tablet:text-3xl">{project.title}</h3>
        {project.description && <p className="mt-2 text-sm text-ink/50 tablet:text-base">{project.description}</p>}
      </div>
    </div>
  </article>
);

export default WorkCard;
