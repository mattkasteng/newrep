import React from "react";
import Image from "next/image";

/**
 * ProjectCard - Card for project showcase with hover and glassmorphism.
 * Props: title, description, link, technologies, image
 */
interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  technologies?: string[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  technologies,
  image 
}) => (
  <div className="glass glass-highlight glass-glow glass-reflection card-hover rounded-2xl p-6 flex flex-col animate-fade-in border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-pink-400 transition-all">
    {image && (
      <div className="mb-4 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-48 object-cover object-center rounded-xl"
        />
      </div>
    )}
    <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-pink-400">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
    {technologies && (
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
    {link && (
      <a
        href={link}
        className="mx-auto mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold shadow-lg btn-animated focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform duration-200 hover:scale-105"
        style={{ display: 'inline-block' }}
      >
        Learn more
      </a>
    )}
  </div>
);

export default ProjectCard; 