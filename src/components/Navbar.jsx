import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-3 transition-all duration-300 ${
        isDarkMode ? "bg-gray-950/60" : "bg-white/60"
      } ${scrolled ? "backdrop-blur-xl shadow-sm" : "backdrop-blur-md"} border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
            isDarkMode
              ? "bg-white/5 hover:bg-white/10 ring-1 ring-blue-500/20 shadow-[0_10px_30px_-12px_rgba(59,130,246,0.25)]"
              : "bg-white/80 hover:bg-white ring-1 ring-gray-200"
          }`}
        >
          <span className="relative inline-flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-400/25 blur-sm" />
            <Code2 size={22} className="relative text-blue-500" />
          </span>
          <span className={`text-lg ml-1 font-semibold tracking-wide ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Ian <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wende</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full border ${
              isDarkMode
                ? "bg-gray-900/50 border-gray-800"
                : "bg-white/70 border-gray-200"
            } backdrop-blur`}
          >
            {["Home", "Skills", "Work", "Certifications", "About"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800/70"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("contact")}
            className="px-4 py-2 rounded-full text-sm uppercase tracking-wider font-medium bg-blue-500 text-white hover:bg-blue-600 shadow-sm"
          >
            Contact
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-xl ${
              isDarkMode ? "bg-gray-900/90" : "bg-white/90"
            } border ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            } shadow-sm`}
          >
            {["Home", "Skills", "Work", "Certifications", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors rounded-lg ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800/60"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
