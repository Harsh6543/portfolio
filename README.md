# 🚀 My Portfolio — React + Vite + Tailwind CSS

A modern, dark-themed frontend developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 📁 Folder Structure

```
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
│   ├── data.js              ← ✏️  YOUR CONTENT LIVES HERE
│   ├── index.css            ← global styles + Tailwind
│   └── main.jsx             ← React entry point
├── index.html               ← SEO meta tags + fonts
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ How to Personalize

**Only edit `src/data.js`** — all sections pull content from there:

- Change `personalInfo.name`, `email`, `github`, `linkedin`
- Update `skills` array with your real skill levels
- Add your actual projects in the `projects` array

---

## ⚡ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🌐 Deploy to Vercel (Free)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import your GitHub repo → Deploy
# Done! Your portfolio is live in ~60 seconds.
```

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI components |
| Vite 5 | Fast dev server & build |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## 📦 Scripts

```bash
npm run dev      # development server
npm run build    # production build → dist/
npm run preview  # preview production build locally
```
