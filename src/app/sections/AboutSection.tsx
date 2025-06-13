import React from "react";
import Image from "next/image";

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