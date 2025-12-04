import { personalInfo } from "../data/portfolioData";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              aria-label={link.label}
            >
              <link.icon
                size={16}
                className="sm:w-5 sm:h-5 text-gray-400 hover:text-white transition-colors"
              />
            </motion.a>
          ))}
        </div>

        <div className="text-center space-y-1 sm:space-y-2">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <motion.a
          href="#home"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          aria-label="Back to top"
        >
          <span className="text-white text-base sm:text-lg">↑</span>
        </motion.a>
      </div>
    </footer>
  );
}
