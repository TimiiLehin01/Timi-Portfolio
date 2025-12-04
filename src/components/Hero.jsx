import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Palette, Zap, ArrowRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useMemo } from "react";

const generateRandomProps = () => ({
  animate: {
    x: [0, Math.random() * 100 - 50],
    y: [0, Math.random() * 100 - 50],
    scale: [1, 1.2, 1],
  },
  transition: {
    duration: Math.random() * 10 + 10,
    repeat: Infinity,
    repeatType: "reverse",
  },

  style: {
    width: Math.random() * 300 + 100,
    height: Math.random() * 300 + 100,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  },
});

const BLOB_PROPS = Array.from({ length: 10 }, generateRandomProps);

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const features = [
    { icon: Code2, text: "Clean Code" },
    { icon: Palette, text: "Modern Design" },
    { icon: Zap, text: "Fast Performance" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        {BLOB_PROPS.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
            style={blob.style}
            animate={blob.animate}
            transition={blob.transition}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 sm:gap-6 justify-center flex-wrap px-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
          >
            View My Work <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden sm:flex gap-6 md:gap-12 justify-center mt-12 sm:mt-20 flex-wrap"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                <item.icon size={20} className="sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <span className="text-xs sm:text-sm text-gray-400">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
