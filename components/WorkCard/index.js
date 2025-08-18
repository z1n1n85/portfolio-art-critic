import React from "react";
import Button from "../Button";

const WorkCard = ({ project }) => {
  return (
    <div className="p-2 laptop:p-4 first:ml-0">
      <h3 className="text-2xl font-medium">{project.title}</h3>
      <div className="mt-2 relative w-full h-auto overflow-hidden">
        <img
          alt={project.title}
          className="w-full h-auto object-cover"
          src={project.image}
        ></img>
      </div>
      <div className="flex mt-3 gap-1 flex-wrap">
        {project.stack && project.stack.map((item, index) => (
          <img key={index} alt={item.name} src={item.icon} />
        ))}
      </div>
      <p className="mt-3 text-xl text-primary text-opacity-50">{project.description}</p>
      <div className="mt-3 flex flex-wrap items-center">
        {project.github && (
          <Button type="primary" className="hover-shadow hover:text-orange-500" onClick={() => window.open(project.github)}>
            GitHub
          </Button>
        )}
        {project.preview && (
          <Button type="primary" className="hover-shadow hover:text-orange-500" onClick={() => window.open(project.preview)}>
            Превью
          </Button>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
