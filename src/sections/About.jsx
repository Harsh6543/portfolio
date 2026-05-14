import { motion } from "framer-motion"; 
import { MapPin, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "../data";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

/**
 * About — personal introduction section.
 * Two-column layout: text on left, terminal-style card on right.
 */
export default function About() {
  const highlights = [
    "Frontend-focused developer",
    "Passionate about clean UI/UX",
    "Loves open source & Git workflows",
    "Always learning something new",
  ];

  // Fake terminal lines — visually interesting, honest content
  const terminalLines = [
    { prompt: "name",     value: personalInfo.name },
    { prompt: "role",     value: "Frontend Developer" },
    { prompt: "location", value: personalInfo.location },
    { prompt: "status",   value: "open to opportunities ✅" },
    { prompt: "learning", value: "React, CSS animations" },
    { prompt: "hobbies",  value: "coding, building stuff" },
  ];

  return (
    <SectionWrapper id="about" className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="01 — About"
        title="Who I Am"
        subtitle="A quick look at my background, what drives me, and what I'm looking for."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* ── Left: Bio text ── */}
        <div className="space-y-6">
          <p className="text-text-secondary text-lg leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Highlight bullets */}
          <ul className="space-y-3" role="list">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <Sparkles
                  size={16}
                  className="text-accent-cyan mt-1 shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Location & Email */}
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={14} className="text-accent-cyan" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors"
            >
              <Mail size={14} className="text-accent-cyan" />
              {personalInfo.email}
            </a>
          </div>

          <div className="pt-2">
            <Button href="#contact" variant="primary">
              Let's Connect
            </Button>
          </div>
        </div>

        {/* ── Right: Terminal card ── */}
        <motion.div
          className="rounded-xl border border-bg-border bg-bg-card overflow-hidden shadow-card"
          whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(0,212,255,0.12)" }}
          transition={{ duration: 0.3 }}
          role="presentation"
          aria-label="Developer info terminal"
        >
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-bg-border bg-bg-secondary">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 font-mono text-xs text-text-muted">
              about.json
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <p className="text-text-muted mb-4">{"{"}</p>
            {terminalLines.map(({ prompt, value }, i) => (
              <motion.p
                key={prompt}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="pl-4"
              >
                <span className="text-accent-cyan">"{prompt}"</span>
                <span className="text-text-muted">: </span>
                <span className="text-green-400">"{value}"</span>
                <span className="text-text-muted">,</span>
              </motion.p>
            ))}
            <p className="text-text-muted">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
