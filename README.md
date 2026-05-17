# Aryan Makhija — Portfolio Website

A premium, modern personal portfolio website built for Strategic Finance & Business Finance professionals.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS keyframes + Intersection Observer
- **Language**: TypeScript
- **Deployment**: Vercel (zero config)

## Design Highlights

- Dark mode with `#080808` deep black background
- Emerald green (`#10b981`) accent system
- Glassmorphism cards with subtle borders
- Instrument Serif (display) + DM Sans (body) + DM Mono (code)
- Animated typing hero with role cycling
- Intersection Observer scroll animations
- Animated stat counters
- Floating hero cards
- Loading screen with progress bar
- Shimmer CTA buttons
- Noise texture overlay
- Floating gradient orbs

## File Structure

```
aryan-portfolio/
├── app/
│   ├── globals.css          # Design system, CSS variables, utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page, section assembly
├── components/
│   ├── LoadingScreen.tsx    # Animated loading with progress bar
│   ├── Navbar.tsx           # Sticky nav with mobile menu
│   ├── Hero.tsx             # Hero with typing animation & floating cards
│   ├── Stats.tsx            # Animated number counters
│   ├── About.tsx            # Professional summary + pillar cards
│   ├── Experience.tsx       # Tabbed experience timeline
│   ├── Skills.tsx           # Skill bars + tag cloud
│   ├── Education.tsx        # Timeline education cards
│   ├── Certifications.tsx   # Cert cards + awards
│   ├── CTA.tsx              # Recruiter-focused call to action
│   ├── Contact.tsx          # Contact form + info
│   └── Footer.tsx           # Footer with social links
├── public/
│   └── resume.pdf           # ← ADD YOUR RESUME HERE
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

## Quick Start (Local Development)

```bash
# 1. Navigate to the project
cd aryan-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

## Add Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

Then update the Resume button in `Navbar.tsx` and `CTA.tsx`:
```tsx
// Change from:
href="#"

// To:
href="/resume.pdf"
download="Aryan_Makhija_Resume.pdf"
```

## Add Your LinkedIn URL

Search for `https://linkedin.com` across all files and replace with your actual LinkedIn profile URL.

## Connect the Contact Form

To make the contact form actually send emails, choose one:

### Option A: Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your form ID
3. In `Contact.tsx`, replace the simulate block:
```tsx
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setStatus('sent')
```

### Option B: Resend + Next.js API Route
1. Install: `npm install resend`
2. Create `app/api/contact/route.ts`
3. Use Resend to send email

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard
1. Push code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/yourusername/aryan-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Select your repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site is live at `yourproject.vercel.app`

### Custom Domain (Optional)
1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `aryanmakhija.com`)
3. Follow DNS configuration steps

## Customization Guide

### Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --accent: #10b981;        /* emerald green */
  --accent-light: #34d399;
  --bg-primary: #080808;    /* deep black */
}
```

### Content
All content is co-located in each component file. To update:
- **Hero tagline**: `components/Hero.tsx` → headline & summary
- **Stats**: `components/Stats.tsx` → `stats` array
- **Experience**: `components/Experience.tsx` → `experiences` array
- **Skills**: `components/Skills.tsx` → `skillGroups` & `tags`
- **Education**: `components/Education.tsx` → `education` array

### Fonts
Currently using DM Sans + Instrument Serif from Google Fonts.
Change in `app/globals.css` `@import` line.

## Performance Tips

- Images: Use Next.js `<Image>` component for any photos
- Fonts: Already using `display=swap` for fast loading
- Built-in: Next.js automatically code-splits and optimizes

## Build for Production

```bash
npm run build
npm start
```

Check for any TypeScript errors before deploying:
```bash
npm run lint
```

---

Built with precision for Aryan Makhija's finance career. 🚀
