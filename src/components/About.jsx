import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalInfo, aboutMe } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-black to-purple-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-1"
          >
            <div className="relative max-w-md mx-auto md:max-w-none">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                  👨‍💻
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl shadow-purple-500/50"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {personalInfo.yearsExperience}
                </div>
                <div className="text-xs sm:text-sm">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl shadow-pink-500/50"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {personalInfo.projectsCompleted}
                </div>
                <div className="text-xs sm:text-sm">Projects Done</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-2 md:order-2"
          >
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>{aboutMe.intro}</p>
              <p>{aboutMe.expertise}</p>
              <p>{aboutMe.passion}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {aboutMe.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4"
                >
                  <div className="text-xs sm:text-sm text-gray-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/resume.pdf/Adebusoye_Timilehin_Resume.pdf"
              download="Adebusoye_Timilehin_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Download Resume <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
