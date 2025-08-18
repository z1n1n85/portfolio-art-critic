import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ skill }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg`}
    >
      <h3 className="text-2xl font-medium">{skill.name}</h3>
      <p className="mt-5 text-xl text-primary text-opacity-50">
        {skill.description}
      </p>
    </div>
  );
};

export default ServiceCard;
