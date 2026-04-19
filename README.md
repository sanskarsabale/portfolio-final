# 🚀 Personal Portfolio — Setup Guide

A modern, dark-themed developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- ⚡ Vite-powered (instant HMR)
- 🎨 Retro-futuristic dark theme with glowing green accents
- 🖱️ Custom animated cursor with lag-follow effect
- 💀 Animated terminal-style loading screen
- 🔤 Typewriter effect in hero section
- 📜 Smooth scroll + active nav highlight
- 🃏 Project cards with category filtering
- 📅 Timeline-style experience section
- 📬 Contact form (hook up to Formspree / EmailJS)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎞️ Framer Motion scroll-reveal animations throughout
- 🔊 Scanline + noise texture overlays for depth

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg          ← Site icon
│   └── resume.pdf           ← ⚠️ ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Loader.jsx       ← Boot-up loading screen
│   │   ├── Navbar.jsx       ← Sticky nav with active highlight
│   │   ├── Hero.jsx         ← Typewriter + CTA
│   │   ├── About.jsx        ← Bio + stats grid
│   │   ├── Skills.jsx       ← Tech stack by category
│   │   ├── Projects.jsx     ← Filterable project cards
│   │   ├── Experience.jsx   ← Work + education timeline
│   │   ├── Contact.jsx      ← Form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js     ← ⭐ EDIT ALL YOUR CONTENT HERE
│   ├── hooks/
│   │   ├── useCursor.js     ← Custom cursor logic
│   │   └── useInView.js     ← Scroll-reveal IntersectionObserver
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🛠️ Setup Instructions

### 1. Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+ (comes with Node)

### 2. Install dependencies

```bash
cd portfolio
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## ✏️ Customizing Your Content

**All content lives in one file:** `src/data/portfolio.js`

Edit the following exports:

| Export       | What to change                            |
|--------------|-------------------------------------------|
| `personal`   | Name, title, bio, email, location        |
| `socials`    | GitHub, LinkedIn, Instagram, Twitter URLs |
| `skills`     | Tech stack by category                    |
| `projects`   | Project cards (title, description, links) |
| `experience` | Work history and education                |

### Adding a profile photo

1. Place your image at `public/avatar.jpg`
2. In `portfolio.js`, set `avatar: "/avatar.jpg"`
3. Use it in the `About` or `Hero` component as `<img src={personal.avatar} />`

### Adding your resume

Place your `resume.pdf` in the `/public` folder. The "Download CV" button will automatically link to it.

---

## 📬 Setting Up the Contact Form

The form is ready — just wire it to a backend. Two easy options:

### Option A: Formspree (free, no backend needed)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` fake timeout with:

```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
setStatus(res.ok ? 'sent' : 'error')
```

### Option B: EmailJS (sends directly from browser)

1. Sign up at [emailjs.com](https://emailjs.com)
2. `npm install @emailjs/browser`
3. Follow their React quickstart guide

---

## 🚀 Deployment

### Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the /dist folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🎨 Customizing the Theme

Colors and fonts are in `tailwind.config.js`:

```js
colors: {
  bg:      '#080c10',   // page background
  accent:  '#00ff9d',   // green glow color — change this to your brand color!
  muted:   '#4a6175',   // secondary text
  bright:  '#e6edf3',   // headings
}
```

Change `accent` to any color (e.g. `#7c3aed` for purple, `#f59e0b` for amber).

---

## 📦 Dependencies

| Package                    | Purpose                    |
|----------------------------|----------------------------|
| `react` + `react-dom`      | UI framework               |
| `framer-motion`            | Animations                 |
| `lucide-react`             | Icon library               |
| `react-intersection-observer` | Scroll detection        |
| `tailwindcss`              | Utility-first CSS          |
| `vite`                     | Build tool                 |

---

Built with ❤️ and too much caffeine.
