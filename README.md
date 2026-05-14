# Harsh Limbasiya — Frontend Developer Portfolio

A modern, dark-themed frontend developer portfolio built with React, Vite, and Framer Motion.

---

## 📁 Folder Structure

portfolio/
├── public/
│   └── favicon.svg          ← browser tab icon
├── src/
│   ├── components/          ← reusable UI pieces
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   └── SectionWrapper.jsx
│   ├── hooks/
│   │   └── useScrollSpy.js  ← active nav highlighting
│   ├── sections/            ← one file per page section
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              ← assembles all sections
│   ├── data.js              ← edit your info here
│   ├── index.css            ← global styles
│   └── main.jsx             ← React entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json

---

## How to Personalize

  src/data.js — all sections pull content from there:
- Change your name, email, GitHub, LinkedIn
- Update your skill levels
- Add your projects

---

## Getting Started

# Install dependencies
yarn

# Start dev server
yarn dev

---

## Deployed On

GitHub: https://github.com/Harsh6543/portfolio
Live:   https://harsh6543.github.io/portfolio

---

## Built With

| Tech          | Purpose          |
|---------------|------------------|
| React 18      | UI components    |
| Vite 5        | Dev server/build |
| CSS3          | Styling          |
| Framer Motion | Animations       |

---

## Scripts

# Development server
npm run dev

# Production build
npm run build

