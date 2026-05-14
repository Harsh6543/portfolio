import { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

/**
 * Navbar — sticky top navigation.
 * Features: scroll-spy active state, glass blur on scroll, mobile hamburger menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // track active section with our custom hook
  const activeId = useScrollSpy(["about", "skills", "projects", "contact"]);

  // add blur/border once user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-bg-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <a
          href="#"
          className="font-display font-bold text-lg text-text-primary hover:text-accent-cyan transition-colors"
          aria-label="Back to top"
        >
          {/* First letter styled */}
          <span className="text-gradient">{personalInfo.name.charAt(0)}</span>
          {personalInfo.name.slice(1)}
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`font-body text-sm transition-colors duration-200 relative group ${
                    isActive ? "text-accent-cyan" : "text-text-secondary hover:text-text-primary"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA: open to work badge + mobile toggle */}
        <div className="flex items-center gap-4">
          <span
            className="hidden md:flex items-center gap-2 text-xs text-green-400 border border-green-400/30 bg-green-400/5 rounded-full px-3 py-1"
            aria-label="Available for work"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Open to work
          </span>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-b border-bg-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4" role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className="block text-text-secondary hover:text-accent-cyan transition-colors py-1 text-sm font-body"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
