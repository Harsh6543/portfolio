import { useState } from "react"; 
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { personalInfo } from "../data";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

/**
 * Contact — simple contact section with:
 *  - mailto-powered form (no backend needed)
 *  - social links sidebar
 *  - animated on scroll
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Opens default email client with pre-filled content — zero backend needed
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const socials = [
    {
      label: "GitHub",
      href: personalInfo.github,
      icon: <Github size={18} />,
      description: "See my code",
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      icon: <Linkedin size={18} />,
      description: "Connect professionally",
    },
    {
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={18} />,
      description: personalInfo.email,
    },
  ];

  return (
    <SectionWrapper id="contact" className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="04 — Contact"
        title="Let's Work Together"
        subtitle="Open to internships and junior frontend roles. Drop me a message — I reply fast."
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* ── Left: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
            aria-label="Contact form"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-text-secondary mb-2 font-body"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-bg-card border border-bg-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted
                           focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-text-secondary mb-2 font-body"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="john@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-bg-card border border-bg-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted
                           focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-text-secondary mb-2 font-body"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Hi, I'd like to discuss an internship opportunity..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-bg-card border border-bg-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted resize-none
                           focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className="w-full flex items-center justify-center gap-2 font-display font-semibold text-sm px-6 py-3 rounded-lg
                         bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary
                         hover:shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99]
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
                         transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              aria-label="Send message via email client"
            >
              {sent ? (
                <>✓ Opening your email client…</>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-text-muted text-xs text-center font-mono">
              // opens your email client with the message pre-filled
            </p>
          </form>
        </motion.div>

        {/* ── Right: Social links + availability ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Availability card */}
          <div className="bg-bg-card border border-bg-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-slow" />
              <span className="font-display font-semibold text-text-primary">
                Available for Opportunities
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Currently seeking internships and junior frontend developer roles.
              I'm eager to contribute, learn fast, and build great things with a team.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
              Find me on
            </p>
            {socials.map(({ label, href, icon, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-bg-card border border-bg-border rounded-xl
                           hover:border-accent-cyan/40 hover:shadow-glow-sm group transition-all duration-300"
                aria-label={`${label}: ${description}`}
              >
                <span className="text-accent-cyan group-hover:scale-110 transition-transform">
                  {icon}
                </span>
                <div>
                  <p className="text-text-primary text-sm font-medium">{label}</p>
                  <p className="text-text-muted text-xs">{description}</p>
                </div>
                <MessageSquare
                  size={14}
                  className="ml-auto text-text-muted group-hover:text-accent-cyan transition-colors"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
