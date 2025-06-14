import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

const projects = {
  "ai-data-platform": {
    title: "AI-Powered Data Analysis Platform",
    description: "A comprehensive platform for analyzing large datasets using machine learning algorithms.",
    fullDescription: `This project involved developing a sophisticated data analysis platform that leverages artificial intelligence to process and analyze large datasets in real-time. The platform features advanced machine learning algorithms for predictive analytics and interactive visualizations.

Key features include:
- Real-time data processing and analysis
- Predictive analytics using machine learning models
- Interactive data visualizations
- Scalable architecture using microservices
- Secure data handling and compliance`,
    technologies: ["Python", "TensorFlow", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    githubLink: "https://github.com/yourusername/ai-platform",
    liveDemo: "https://demo.ai-platform.com"
  },
  "ecommerce-optimization": {
    title: "E-commerce Optimization System",
    description: "An intelligent system that optimizes e-commerce operations using data-driven insights.",
    fullDescription: `This project focuses on optimizing e-commerce operations through data-driven insights and machine learning. The system analyzes customer behavior, inventory levels, and market trends to provide actionable recommendations.

Key features include:
- Inventory management optimization
- Dynamic pricing strategies
- Customer behavior analysis
- Sales forecasting
- Performance analytics dashboard`,
    technologies: ["Node.js", "MongoDB", "AWS", "React"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1200&q=80",
    githubLink: "https://github.com/yourusername/ecommerce-optimization",
    liveDemo: "https://demo.ecommerce-optimization.com"
  },
  "healthcare-dashboard": {
    title: "Healthcare Analytics Dashboard",
    description: "A real-time dashboard for healthcare providers to monitor patient data and treatment outcomes.",
    fullDescription: `This project developed a comprehensive healthcare analytics dashboard that enables healthcare providers to monitor patient data and treatment outcomes in real-time. The system ensures HIPAA compliance while providing valuable insights.

Key features include:
- Real-time patient monitoring
- Treatment outcome tracking
- Secure data handling
- HIPAA compliance
- Customizable reporting`,
    technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    githubLink: "https://github.com/yourusername/healthcare-dashboard",
    liveDemo: "https://demo.healthcare-dashboard.com"
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/projects"
          className="inline-flex items-center text-blue-600 dark:text-pink-400 mb-8 hover:underline"
        >
          ← Back to Projects
        </Link>
        
        <article className="glass p-8 rounded-2xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          
          {project.image && (
            <div className="mb-8 aspect-video relative rounded-lg overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {project.fullDescription}
            </p>
          </div>

          <div className="flex gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                View on GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 dark:bg-pink-500 text-white font-medium hover:bg-blue-700 dark:hover:bg-pink-600 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </article>
      </div>
    </main>
  );
} 