const WorkCard = ({ project }) => {
  return (
    <div className="p-4 laptop:p-8">
      <div className="relative mb-4 w-full h-auto overflow-hidden">
        {project.image && 
          <img
            alt={project.title}
            className="w-full tablet:w-[50%] h-auto object-contain mx-auto"
            src={project.image}
          ></img>
        }
      </div>
      <h4 className="mb-2 text-2xl font-medium">{project.title}</h4>
      <p className="text-xl text-primary text-opacity-50">{project.description}</p>
    </div>
  );
};

export default WorkCard;
