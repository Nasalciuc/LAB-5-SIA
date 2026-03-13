# Pegasus AI Systems — AI Automation for Businesses

A modern, responsive **Single Page Application (SPA)** built for Pegasus AI Systems, an AI automation company based in Moldova. The site showcases AI solutions for businesses, featuring Pegasus Flow platform, QA analysis, and marketing automation services.

## 🚀 Live Demo

**Coming Soon**: Deployed on Vercel at `https://pegasus-ai-systems.vercel.app`

## 📋 Tech Stack

- **React** 19.2.4 — UI library
- **TypeScript** 5.9.3 — Type-safe JavaScript
- **Vite** 6.4.1 — Lightning-fast build tool
- **React Router Dom** 7.13.1 — Client-side routing (5 pages)
- **Lucide React** — Clean icon library
- **CSS** (Custom Design System) — Dark SaaS theme with 90+ classes, responsive breakpoints

## 📁 Folder Structure

```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation header with logo & CTA
│   │   ├── Footer.tsx        # Footer with contact & social links
│   │   └── ScrollToTop.tsx   # Auto-scroll on route changes
│   ├── pages/
│   │   ├── Home.tsx          # Landing page (hero, features, testimonials)
│   │   ├── About.tsx         # Company story & values
│   │   ├── Services.tsx      # Service offerings & pricing
│   │   ├── Contact.tsx       # Contact form + Google Maps
│   │   └── NotFound.tsx      # 404 error page
│   ├── hooks/
│   │   └── useReveal.tsx     # Scroll animation hook (IntersectionObserver)
│   ├── App.tsx               # Root router component
│   ├── main.tsx              # Entry point
│   └── index.css             # Complete design system
├── public/                    # Static assets
│   ├── favicon.svg
│   └── icons.svg
├── vite.config.ts            # Vite configuration (includes API proxy)
├── vercel.json               # Vercel SPA rewrite rules
├── package.json              # Dependencies & scripts
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18+ 
- **npm** 9+

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nasalciuc/LAB-5-SIA.git
   cd LAB-5-SIA/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Server starts at `http://localhost:5174`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output: `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run linter**
   ```bash
   npm run lint
   ```

## 📱 Features

### Pages
- **Home** — Hero section with Pegasus Flow badge, dashboard mockup, feature cards, stats, testimonials, CTA
- **About** — Company narrative, values (Innovation, Transparency, Focus, Collaboration), team photo, Moldova hub context
- **Services** — Pegasus Flow platform, QA call center analysis, marketing automation, pricing tiers (Starter €299, Professional €799, Enterprise custom)
- **Contact** — Contact form with state management, location info, Google Maps embed, social links
- **404 Page** — Branded error page with home link

### UI/UX
- **Scroll Animations** — Fade-in effects via `useReveal` hook + IntersectionObserver
- **Responsive Design** — Breakpoints: 1024px, 768px, 480px
- **Dark SaaS Theme** — Professional gradient backgrounds, glassmorphism components, cyan/purple accent colors
- **Local Identity** — 🇲🇩 Moldova flag, Chișinău address, conversational Romanian CTAs
- **Real Testimonials** — Profile photos via pravatar.cc

### API Integration
- **Contact Form** — Submits to Express.js backend on `localhost:3001/api/contact`
- **Dev Proxy** — Vite configured to forward `/api/*` requests to backend
- **Client-side Routing** — Vercel SPA rewrite rules configured for client-side routing

## 🔧 API Proxy Configuration

The app is configured to proxy API requests during development:

**vite.config.ts:**
```javascript
server: {
  proxy: {
    '/api': 'http://localhost:3001'
  }
}
```

Contact form requests are forwarded to a backend Express server on port 3001.

## 🚢 Deployment

### Vercel (Recommended)
1. Connect GitHub repo to Vercel
2. Import `client/` as root directory
3. Vercel applies `vercel.json` SPA rewrite rules automatically
4. Deploy succeeds with zero errors

### Manual Deployment
1. Run `npm run build` in `client/` folder
2. Upload `dist/` contents to your host
3. Configure server to rewrite all routes to `index.html` (SPA requirement)

## 📝 Key Design System Classes

**Navigation & Buttons:**
- `.nav` — Navigation bar container
- `.btn-p` — Primary button (cyan background)
- `.btn-o` — Outline button
- `.btn-w` — White button

**Cards & Layout:**
- `.card` — Basic card with shadow
- `.g3`, `.g4` — 3x3 and 4x4 grid layouts
- `.badge` — Feature badge

**Hero & Sections:**
- `.hero` — Hero container with gradient
- `.mock`, `.mock-a`, `.mock-b`, `.mock-c` — Mockup containers
- `.stat-*` — Statistics display

**Testimonials & Pricing:**
- `.t-*` — Testimonial styling
- `.pr-*` — Pricing tier styling
- `.cta-g` — CTA section with gradient

## 🌍 Company Info

**Pegasus AI Systems**
- **Headquarters**: Chișinău, Moldova 🇲🇩
- **Email**: contact@pegasus-ai.md
- **Phone**: +373 69 123 456
- **Vision**: Democratize AI for SMEs across Moldova and Eastern Europe
- **Platform**: Pegasus Flow — Low-code AI automation platform

## 🔗 Links

- **GitHub**: https://github.com/Nasalciuc/LAB-5-SIA
- **Contact**: contact@pegasus-ai.md
- **Social**: LinkedIn, Facebook, GitHub profiles linked in footer

## 📄 License

This project is proprietary for Pegasus AI Systems.

---

**Version**: v3.0 (Human Touch Redesign)  
**Last Updated**: 2025  
**Build Status**: ✅ Production Ready
