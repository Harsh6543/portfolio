import { motion } from "framer-motion";
import { Github, ExternalLink, FolderOpen } from "lucide-react"; 

/**
 * ProjectCard — displays a single project with tags, links, hover glow.
 *
 * Props: title, description, tags[], github, live, featured
 */
export default function ProjectCard({ title, description, tags, github, live, featured, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="relative group bg-bg-card border border-bg-border rounded-xl p-6 flex flex-col gap-5
                 hover:border-accent-cyan/40 hover:shadow-glow-sm transition-all duration-300"
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute top-4 right-4 font-mono text-[10px] text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/5 rounded-full px-2 py-0.5 uppercase tracking-wider">
          Featured
        </span>
      )}

      {/* Folder icon */}
      <div className="flex items-center justify-between">
        <FolderOpen
          size={28}
          className="text-accent-cyan group-hover:scale-110 transition-transform duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <div>
        <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2 mt-auto" role="list" aria-label="Technologies used">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-xs text-text-muted border border-bg-border bg-bg-secondary rounded-md px-2 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2 border-t border-bg-border">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-muted hover:text-accent-cyan transition-colors text-sm"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github size={15} />
            <span className="font-mono text-xs">Code</span>
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-text-muted hover:text-accent-cyan transition-colors text-sm"
            aria-label={`View ${title} live demo`}
          >
            <ExternalLink size={15} />
            <span className="font-mono text-xs">Live Demo</span>
          </a>
        )}
      </div>

      {/* Hover shimmer overlay */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 shimmer"
        aria-hidden="true"
      />
    </motion.article>
  );
}
