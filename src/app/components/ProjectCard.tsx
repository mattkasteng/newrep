import React from "react";

/**
 * ProjectCard - Card for project showcase with hover and glassmorphism.
 * Props: title, description, link
 */
type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <div className="glass card-hover rounded-2xl p-6 flex flex-col animate-fade-in border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 transition-all">
    <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-pink-400">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
    {link && (
      <a
        href={link}
        className="inline-block mt-auto text-blue-600 dark:text-pink-400 font-medium btn-animated"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    )}
  </div>
);

export default ProjectCard; 