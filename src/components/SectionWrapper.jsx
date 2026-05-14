import { motion } from "framer-motion"; 

/**
 * SectionWrapper — wraps every major section.
 * Provides: consistent padding, fade-in animation, and id anchor.
 *
 * Props:
 *  id        — used for scroll-spy & nav links (required)
 *  className — optional extra Tailwind classes
 *  children  — section content
 */
export default function SectionWrapper({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={`relative py-24 px-6 md:px-12 lg:px-24 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
