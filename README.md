# Cozy Cafe ☕

A warm, responsive multi-page website for Cozy Cafe — a Black-owned coffee shop on Chicago's northside. Built with React and Vite.

## Live Site
> Coming soon

## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **React Router DOM** — client-side routing
- **CSS** — custom styling with a consistent design system
- **Storybook** — component documentation and isolated development
- **Chromatic** — visual regression testing
- **Git** — version control

## Pages

- **Home** — Hero slideshow, About section, Menu, Location
- **Our Story** — dedicated article page about the cafe

## Components

| Component | Description |
|---|---|
| `Navbar` | Sticky navigation with mobile menu |
| `Hero` | Full-screen auto-fading image slideshow |
| `About` | Cafe story with interior photo and link to Our Story page |
| `Menu` | Three-column grid of Coffee, Tea, and Pastry items |
| `Location` | Hours table, address, contact info, and Google Maps embed |
| `Footer` | Brand, navigation links, and social media |
| `OurStory` | Standalone article page about the cafe's history |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Run Storybook
npm run storybook

# Run Chromatic visual tests
npm run chromatic
```

## Project Structure

```
cozy-cafe-landing-page/
├── public/
│   └── images/
│       ├── hero.png
│       ├── interior.jpg
│       └── treats.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── About.jsx / About.css
│   │   ├── Menu.jsx / Menu.css
│   │   ├── Location.jsx / Location.css
│   │   └── Footer.jsx / Footer.css
│   ├── pages/
│   │   └── OurStory.jsx / OurStory.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── index.html
```

## Visual Testing

This project uses **Storybook** and **Chromatic** for component documentation and visual regression testing. Every component has a corresponding story. Chromatic captures screenshots of each story and flags any visual changes between builds.

## Color Palette

| Name | Hex | Usage |
|---|---|---|
| Espresso | `#2c1a0e` | Navbar, Footer, dark backgrounds |
| Cream | `#f5e6d3` | Primary text on dark backgrounds |
| Caramel | `#c8956c` | Accent color, hover states, labels |
| Warm Brown | `#5c4033` | Body text on light backgrounds |

---

Built by Berhane M. Berhane
