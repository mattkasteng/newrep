import React from "react";
import Link from "next/link";
import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    id: "project1",
    title: "AI-Powered Data Analysis Platform",
    description: "A comprehensive platform for analyzing large datasets using machine learning algorithms. Features include real-time data processing, predictive analytics, and interactive visualizations.",
    link: "/projects/ai-data-platform",
    technologies: ["Python", "TensorFlow", "React", "Docker"]
  },
  {
    id: "project2",
    title: "E-commerce Optimization System",
    description: "An intelligent system that optimizes e-commerce operations using data-driven insights. Includes inventory management, pricing optimization, and customer behavior analysis.",
    link: "/projects/ecommerce-optimization",
    technologies: ["Node.js", "MongoDB", "AWS", "React"]
  },
  {
    id: "project3",
    title: "Healthcare Analytics Dashboard",
    description: "A real-time dashboard for healthcare providers to monitor patient data and treatment outcomes. Features secure data handling and HIPAA compliance.",
    link: "/projects/healthcare-dashboard",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 flex flex-col items-center bg-transparent">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 