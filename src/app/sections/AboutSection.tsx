import React from "react";
import Image from "next/image";

const _experience = [
  {
    role: "Managing Partner",
    company: "Tropicalia (AI Consulting)",
    date: "Mar 2023 – Present",
    location: "Lisbon, Portugal",
    details: [
      "Lead AI, Financial Modeling, and Data & Analytics projects for diverse clients.",
      "Drive business transformation through innovative technology solutions.",
    ],
  },
  {
    role: "Management Consultant | Data & Business Analyst",
    company: "Capco",
    date: "Sep 2021 – Aug 2023",
    location: "London, England (Hybrid)",
    details: [
      "Analysed financial data for budgets exceeding €100m, overseeing 130+ projects.",
      "Designed and implemented dashboards to monitor project progress and enhance decision-making.",
      "Led migration of Data & Analytics department's Book of Work and managed post-migration system integration.",
      "Drove process automation in Jira and QlikSense, reducing costs and improving efficiency.",
    ],
  },
  {
    role: "Trade Assistant | Permanent Mission of Brazil to the WTO & UNCTAD",
    company: "World Trade Organization",
    date: "May 2019 – Aug 2019",
    location: "Geneva, Switzerland",
    details: [
      "Supported WTO negotiations, attended high-level sessions, and authored comprehensive reports.",
      "Equipped diplomats with actionable summaries for negotiations.",
      "Managed social media strategy and stakeholder engagement.",
    ],
  },
  {
    role: "Public Sector Operations Intern",
    company: "The OPEC Fund for International Development (OFID)",
    date: "Jul 2018 – Sep 2018",
    location: "Vienna, Austria",
    details: [
      "Conducted research to support planning and allocation of concessional loans.",
      "Drafted project summaries and supported development finance operations.",
    ],
  },
];

const _education = [
  {
    degree: "MSc, Management",
    institution: "Imperial Business School",
    date: "Sep 2020 – Sep 2021",
    grade: "Merit",
    highlights: [
      "Business Economics, Corporate Finance, Innovation Management, Marketing Decisions, Operations Management, Organisational Behaviour, Strategic Management, Family Business",
    ],
  },
  {
    degree: "MA (Hons), International Relations",
    institution: "The University of Edinburgh",
    date: "Sep 2016 – Jul 2020",
    grade: "2:1",
    highlights: [
      "Activities & societies: Economics society, Business society, Political Union, MUN",
      "Extra coursework in International Law, Business Management, and Economics",
    ],
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center py-20 bg-transparent scroll-mt-20"
    >
      <div className="max-w-4xl w-full glass card-hover p-6 md:p-12 transition-colors duration-500 animate-fade-in flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Matteus Kasten Guimarães profile photo"
            width={180}
            height={180}
            className="rounded-full shadow-lg object-cover object-center border-4 border-white dark:border-gray-800"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I am a Managing Partner at Tropicalia, an AI consulting firm, with a passion for leveraging technology to drive business transformation. My experience spans management consulting, data analytics, and international organizations. I have led projects in AI, financial modeling, and strategic operations, helping organizations innovate and improve efficiency across sectors.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Previously, I worked as a Management Consultant at Capco, supporting financial data analysis and process automation for major clients, and as a Trade Assistant at the WTO, where I contributed to international negotiations and strategy. My early career included research and development finance at OFID.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I hold an MSc in Management from Imperial Business School and an MA (Hons) in International Relations from The University of Edinburgh, combining business, economics, and technology to bridge strategy and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 