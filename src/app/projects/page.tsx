import React from "react";
import ProjectCard from "@/app/components/ProjectCard";

const projects = [
  {
    id: "project1",
    title: "AI-Powered Data Analysis Platform",
    description: "A comprehensive platform for analyzing large datasets using machine learning algorithms. Features include real-time data processing, predictive analytics, and interactive visualizations.",
    link: "/projects/ai-data-platform",
    technologies: ["Python", "TensorFlow", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project2",
    title: "E-commerce Optimization System",
    description: "An intelligent system that optimizes e-commerce operations using data-driven insights. Includes inventory management, pricing optimization, and customer behavior analysis.",
    link: "/projects/ecommerce-optimization",
    technologies: ["Node.js", "MongoDB", "AWS", "React"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project3",
    title: "Healthcare Analytics Dashboard",
    description: "A real-time dashboard for healthcare providers to monitor patient data and treatment outcomes. Features secure data handling and HIPAA compliance.",
    link: "/projects/healthcare-dashboard",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 