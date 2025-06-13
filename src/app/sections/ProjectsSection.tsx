import React from "react";

const projects = [
  {
    title: "AI-Driven Financial Dashboard",
    description:
      "Developed an interactive dashboard for a Tier 1 Bank's Data & Analytics department, integrating automated reporting and real-time analytics.",
    link: "#",
  },
  {
    title: "Strategic Operations Automation",
    description:
      "Led the automation of tools in Jira and QlikSense, reducing operational costs and improving governance efficiency for a global consulting firm.",
    link: "#",
  },
  {
    title: "International Trade Analysis Platform",
    description:
      "Built a data-driven platform to support trade negotiations and policy analysis for the World Trade Organization.",
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="w-full py-20 flex flex-col items-center bg-transparent parallax" style={{background: "linear-gradient(120deg, #fbc2eb 0%, #a5b4fc 100%)"}}>
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass card-hover rounded-2xl p-6 flex flex-col animate-fade-in"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-pink-400">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                className="inline-block mt-auto text-blue-600 dark:text-pink-400 font-medium btn-animated"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 