import { motion } from "framer-motion"; 
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data";
import Button from "../components/Button";

/**
 * Hero — the first thing visitors see.
 * Features: animated text reveal, floating orbs, grid background, CTA buttons.
 */
export default function Hero() {
  // Stagger animation variants for children
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Glowing orbs ── */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl animate-pulse-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-accent-blue/8 blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-6"
        >
          Hello, world 👋
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-text-primary mb-4"
        >
          I'm{" "}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Role pill */}
        <motion.div variants={item} className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 max-w-[60px] bg-bg-border" />
          <span className="font-display text-xl md:text-2xl font-semibold text-text-secondary">
            {personalInfo.role}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button
            href={personalInfo.github}
            variant="outline"
            external
            icon={<Github size={16} />}
          >
            GitHub
          </Button>
          <Button
            href={personalInfo.linkedin}
            variant="outline"
            external
            icon={<Linkedin size={16} />}
          >
            LinkedIn
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-8 text-sm"
          role="list"
          aria-label="Quick stats"
        >
          {[
            { label: "Projects Built", value: "2+" },
            { label: "Skills Mastered", value: "6+" },
            { label: "Available", value: "Now" },
          ].map(({ label, value }) => (
            <div key={label} role="listitem" className="flex flex-col gap-0.5">
              <span className="font-display text-2xl font-bold text-accent-cyan">
                {value}
              </span>
              <span className="text-text-muted uppercase tracking-wider text-xs font-mono">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
