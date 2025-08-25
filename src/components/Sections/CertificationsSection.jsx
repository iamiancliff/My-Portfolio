import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CERTIFICATIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const CertificationsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return <section
      id="certifications"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Verified Achievements
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light">
            Certifications
          </motion.h2>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  : "bg-white/80 border-gray-200 hover:border-gray-300"
              } transition-all duration-300 backdrop-blur-sm group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cert.badgeColor} text-white`}>
                    <BadgeCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-tight">{cert.title}</h3>
                    <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.issuer}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}>{cert.year}</span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                      : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  <ExternalLink size={14} /> Verify
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
};

export default CertificationsSection;


