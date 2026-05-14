import { motion } from "framer-motion"; 
import { skills } from "../data";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

/**
 * Skills — animated skill bars grouped by category.
 * Each bar fills on scroll-into-view using Framer Motion.
 */

const categoryLabels = {
  core: "Core Technologies",
  framework: "Frameworks & Libraries",
  backend: "Backend & Database",
  tool: "Tools & Workflow",
};

// Group skills by category
const grouped = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group"
    >
      {/* Label row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary text-sm font-body font-medium group-hover:text-accent-cyan transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>

      {/* Track */}
      <div className="h-1.5 w-full bg-bg-border rounded-full overflow-hidden">
        {/* Fill — animates width on view */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.07 + 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-6xl mx-auto">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-glow/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="02 — Skills"
        title="What I Work With"
        subtitle="Technologies I've built real projects with — no fluff, just honest skill levels."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(grouped).map(([category, items]) => (
          <div
            key={category}
            className="bg-bg-card border border-bg-border rounded-xl p-6 hover:border-accent-cyan/30 transition-colors duration-300"
          >
            {/* Category label */}
            <p className="font-mono text-xs text-accent-cyan uppercase tracking-widest mb-6">
              {categoryLabels[category] ?? category}
            </p>

            {/* Skill bars */}
            <div className="space-y-5">
              {items.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        className="mt-12 text-center text-text-muted text-sm font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        // always learning · currently exploring Node.js & TypeScript
      </motion.p>
    </SectionWrapper>
  );
}
