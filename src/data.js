/** 
 * ✏️  EDIT THIS FILE to personalize your portfolio.
 * All sections pull their content from here — no hunting through components.
 */

export const personalInfo = {
  name: "Harsh Limbasiya",            // ← your full name
  role: "Frontend Developer",
  tagline: "I build clean, fast, and accessible web experiences.",
  bio: `I'm a self-taught frontend developer passionate about turning ideas into
  pixel-perfect, interactive web apps. Currently looking for internships and
  junior frontend roles where I can contribute, grow, and build cool things.`,
  location: "India",
  email: "harshlimbasiya786@gmail.com",      // ← your email
  github: "https://github.com/Harsh6543",   // ← your GitHub
  linkedin: "https://www.linkedin.com/in/harshlimbasiya/", // ← your LinkedIn
};

export const skills = [
  { name: "HTML5",       level: 90, category: "core" },
  { name: "CSS3",        level: 85, category: "core" },
  { name: "Responsive Design", level: 85, category: "core" },
  { name: "JavaScript",  level: 80, category: "core" },
  { name: "React",       level: 75, category: "framework" },
  { name: "Git",         level: 35, category: "tool" },
  { name: "GitHub",      level: 40, category: "tool" },
  { name: "Node.js",     level: 25, category: "backend" },  
  { name: "Express.js",  level: 20, category: "backend" },
  { name: "MongoDB",     level: 20, category: "backend" },
];

export const projects = [
  {
    id: 1,
    title: "Food Ordering App",           // ← your project name
    description:
      "A responsive food ordering app built with React. Features a dynamic menu, food categories, and a clean modern UI.",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Harsh6543/food-ordering-app",
    live: "https://harsh6543.github.io/food-ordering-app/",   // leave "" if not deployed
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A real-time weather app built with JavaScript and the OpenWeather API. Shows live temperature, weather conditions, and location-based data.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Harsh6543/weatherApp",
    live: "https://harsh6543.github.io/weatherApp/",   // leave "" if not deployed
    featured: true,
  },
];

export const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];
