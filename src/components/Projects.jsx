import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-1 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="bg-black rounded-2xl p-6 sm:p-8 relative z-10 h-full flex flex-col">
                  {project.videoPreview && (
                    <div
                      className={`relative w-full h-32 bg-white rounded-lg overflow-hidden mb-6`}
                    >
                      <video
                        src={project.videoPreview}
                        className="absolute inset-0 w-full h-full object-cover opacity-100"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300"
                    >
                      Live Demo{" "}
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-gray-300"
                    >
                      Code <Github size={14} className="sm:w-4 sm:h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
