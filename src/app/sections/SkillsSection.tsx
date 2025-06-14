import React from "react";

const skills = [
  "Artificial Intelligence (AI)",
  "Financial Modeling",
  "Data Analysis",
  "Business Analysis",
  "Strategic Communications",
  "Project Management",
  "Power BI",
  "Jira",
  "QlikSense",
  "Leadership",
  "Data Cleaning",
  "Stakeholder Management",
  "International Relations",
  "Operations Management",
  "Innovation Management",
  "Corporate Finance"
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 flex flex-col items-center bg-transparent">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl w-full">
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass glass-highlight glass-glow glass-reflection card-hover px-4 py-3 text-center text-gray-800 dark:text-gray-200 font-medium shadow animate-fade-in flex items-center justify-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 