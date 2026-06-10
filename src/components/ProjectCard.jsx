import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { GitBranch, Users, Globe } from "lucide-react";

const ProjectCard = ({ project, index, isDarkMode }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    className="group relative h-full"
  >
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col h-full ${isDarkMode
          ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
          : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
        } backdrop-blur-sm`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />



        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${isDarkMode
                ? "bg-gray-800/80 text-gray-300"
                : "bg-white/80 text-gray-700"
              } backdrop-blur-sm`}
          >
            {project.category}
          </span>
        </div>

        {/* Hover Overlay with CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3.5"
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 15, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              animate={{ y: 0, opacity: 1 }}
              className={`border border-white/80 text-white hover:bg-white hover:text-gray-900 px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 text-xs font-semibold transition-all`}
            >
              <FiGithub size={14} />
              <span>GitHub</span>
            </motion.a>
          )}

          {project.liveUrl && project.liveUrl !== "#" && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 15, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              animate={{ y: 0, opacity: 1 }}
              className={`bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 text-xs font-semibold transition-all`}
            >
              <Globe size={14} />
              <span>Visit Site</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3 gap-3">
          <h3 className="text-xl font-medium group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          {project.status && (
            <span
              className={`shrink-0 text-[11px] px-3 py-1 rounded-full font-medium border ${isDarkMode
                  ? "bg-blue-500/10 text-blue-300 border-blue-400/20"
                  : "bg-blue-50 text-blue-700 border-blue-200"
                }`}
              title={project.status}
            >
              {project.status}
            </span>
          )}
        </div>

        <p
          className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
        >
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`text-xs px-3 py-1 rounded-full ${isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.contribution && (
          <div className={`mt-4 pt-4 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}>
            <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
              <GitBranch size={13} />
              <span>My Contribution</span>
            </div>
            <p className={`text-xs leading-relaxed mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              {project.contribution}
            </p>
          </div>
        )}

        {project.collaborators && (
          <div className={`mt-3 pt-3 border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}>
            <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <Users size={13} />
              <span>Collaborators</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.collaborators.map((collaborator, idx) => (
                <span
                  key={idx}
                  className={`text-[10px] px-2 py-0.5 rounded ${isDarkMode
                      ? "bg-gray-800/60 text-gray-400 border border-gray-800"
                      : "bg-gray-50 text-gray-600 border border-gray-200"
                    }`}
                >
                  {collaborator}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
};

export default ProjectCard;
