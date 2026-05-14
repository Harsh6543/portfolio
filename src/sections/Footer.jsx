import { Github, Linkedin, Mail, Heart } from "lucide-react"; 
import { personalInfo } from "../data";

/**
 * Footer — simple, clean bottom section.
 * Includes social icons, copyright, and a "back to top" link.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub",   href: personalInfo.github,              icon: <Github size={18} /> },
    { label: "LinkedIn", href: personalInfo.linkedin,             icon: <Linkedin size={18} /> },
    { label: "Email",    href: `mailto:${personalInfo.email}`,    icon: <Mail size={18} /> },
  ];

  return (
    <footer className="border-t border-bg-border bg-bg-secondary" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <p className="text-text-muted text-sm font-mono text-center sm:text-left">
          © {year}{" "}
          <span className="text-text-secondary">{personalInfo.name}</span>
          {" "}— Built with React + CSS
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4" role="list" aria-label="Social links">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              role="listitem"
              aria-label={label}
              className="text-text-muted hover:text-accent-cyan transition-colors hover:scale-110 transform duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="text-text-muted hover:text-accent-cyan text-xs font-mono uppercase tracking-widest transition-colors"
          aria-label="Back to top"
        >
          ↑ Back to top
        </a>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
    </footer>
  );
}
