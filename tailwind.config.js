/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Display font — sharp, editorial
        display: ["'Syne'", "sans-serif"],
        // Body font — clean, readable
        body: ["'DM Sans'", "sans-serif"],
        // Mono — for code snippets
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: {
          primary: "#080B10",
          secondary: "#0D1117",
          card: "#111827",
          border: "#1E2D3D",
        },
        accent: {
          cyan: "#00D4FF",
          blue: "#0066FF",
          glow: "rgba(0, 212, 255, 0.15)",
        },
        text: {
          primary: "#E8EDF5",
          secondary: "#8899AA",
          muted: "#4A5568",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.2)",
        "glow-sm": "0 0 12px rgba(0, 212, 255, 0.15)",
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderGlow: {
          "0%": { boxShadow: "0 0 8px rgba(0, 212, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" },
        },
      },
    },
  },
  plugins: [],
}
