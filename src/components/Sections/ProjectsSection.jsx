import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS, CONTRIBUTIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("recent");

  const tabs = [
    { id: "recent", label: "Recent Projects", count: PROJECTS.length },
    { id: "contributed", label: "Contributed Projects", count: CONTRIBUTIONS.length },
  ];

  const currentProjects = activeTab === "recent" ? PROJECTS : CONTRIBUTIONS;

  return <section
    id="work"
    ref={sectionRef}
    className={`py-24 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
  >
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
      />
      <div
        className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
      />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">

      {/* Section Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.div
          variants={itemVariants}
          className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
        >
          Featured Work
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-light mb-6"
        >
          Recent
          <span className="text-blue-500 font-medium"> Projects</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
        >
          A collection of projects that showcase my expertise in building
          modern web applications and solving complex problems.
        </motion.p>
      </motion.div>

      {/* Dynamic Tab Switcher */}
      <div className="flex justify-center mb-16">
        <div className={`inline-flex p-1.5 rounded-full border transition-colors ${isDarkMode
            ? "bg-gray-900/60 border-gray-800/80"
            : "bg-gray-100 border-gray-200"
          }`}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors focus:outline-none flex items-center gap-2"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabIndicator"
                    className={`absolute inset-0 rounded-full shadow-sm ${isDarkMode
                        ? "bg-blue-600/20 ring-1 ring-blue-500/30 bg-blue-500/10"
                        : "bg-white shadow-sm ring-1 ring-gray-200/50"
                      }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${isActive
                    ? isDarkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"
                    : isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-650 hover:text-gray-850"
                  }`}>
                  {tab.label}
                </span>
                <span className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full transition-colors duration-300 font-mono ${isActive
                    ? isDarkMode ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700 font-bold"
                    : isDarkMode ? "bg-gray-800 text-gray-500" : "bg-gray-200/80 text-gray-500"
                  }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {currentProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
        ))}
      </motion.div>

    </div>
  </section>
};

export default ProjectsSection;
