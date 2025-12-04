import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      text: "Email",
      href: `mailto:${personalInfo.email}`,
      color: "from-red-500/20 to-orange-500/20",
      hoverColor: "hover:from-red-500/30 hover:to-orange-500/30",
    },
    {
      icon: Github,
      text: "GitHub",
      href: personalInfo.github,
      color: "from-gray-500/20 to-slate-500/20",
      hoverColor: "hover:from-gray-500/30 hover:to-slate-500/30",
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      href: personalInfo.linkedin,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "hover:from-blue-500/30 hover:to-cyan-500/30",
    },
  ];

  const whatsappNumber = "2348103478391";
  const whatsappMessage = "Hi! I'd love to discuss a project with you.";

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 sm:mb-16">
            I'm always open to discussing new projects and opportunities
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-10 sm:mb-12"
          >
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full font-bold text-base sm:text-lg text-white shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

              <MessageCircle
                size={24}
                className="sm:w-7 sm:h-7 relative z-10"
              />
              <span className="relative z-10">Chat on WhatsApp</span>
              <Send
                size={18}
                className="sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <p className="text-sm text-gray-500 mt-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Usually responds within minutes
            </p>
          </motion.div>

          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />
            <span className="text-gray-500 text-sm">Or connect via</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
            {contactLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r ${item.color} ${item.hoverColor} border border-white/20 rounded-full font-semibold flex items-center gap-2 sm:gap-3 transition-all`}
              >
                <item.icon size={18} className="sm:w-5 sm:h-5" />
                {item.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
