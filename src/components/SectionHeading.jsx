/** 
 * SectionHeading — reusable heading block used at the top of each section.
 *
 * Props:
 *  eyebrow  — small label above title (e.g. "01 — About")
 *  title    — main large heading
 *  subtitle — optional paragraph below heading
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-16 max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg leading-relaxed">{subtitle}</p>
      )}
      {/* Decorative underline */}
      <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent-cyan to-accent-blue" />
    </div>
  );
}
