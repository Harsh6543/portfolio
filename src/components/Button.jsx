/**
 * Button — reusable button with two variants.
 *
 * Variants:
 *  "primary"  — filled cyan/blue gradient
 *  "outline"  — transparent with cyan border
 *
 * Usage:
 *  <Button href="https://..." variant="primary" external>View Project</Button>
 *  <Button onClick={fn} variant="outline">Download CV</Button>
 */
export default function Button({ 
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
  icon,
}) {
  const base =
    "inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-bg-primary";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary hover:shadow-glow-cyan hover:scale-[1.03] active:scale-[0.98]",
    outline:
      "border border-bg-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow-sm active:scale-[0.98]",
  };

  const props = {
    className: `${base} ${variants[variant]} ${className}`,
    onClick,
    ...(href && {
      href,
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
    }),
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </Tag>
  );
}
