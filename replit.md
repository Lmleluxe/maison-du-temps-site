# Overview

Maison du Temps is a luxury palace-style beauty and wellness institute website located in Geneva, Switzerland. The site presents high-end spa services, professional training programs, and partner brands with an exceptional palace-like aesthetic inspired by luxury establishments like La Réserve. The website features sophisticated animations, refined typography, elegant micro-interactions, and a cohesive design system that reflects Swiss precision and exceptional service. Built as a static, content-driven platform with internationalization support for French and English.

# Recent Updates (November 2025)

**Header Redesign (Sothys-inspired):**
- Two-tier header structure: logo section (ivory background) + dark navigation bar (palace-blue-deep)
- Logo "MAISON DU TEMPS / GENÈVE" centered in top section with gold vertical bar accent
- Dark navigation submenu with white text in uppercase, hover effects with palace-green-pine background
- Language selector (FR/EN) positioned to the right of logo with globe icon
- Responsive mobile menu with language selector integrated

**Internationalization & Language Switching:**
- Full bilingual support (French/English) using next-intl
- Dynamic language switching via router with locale preservation
- Navigation menu items fully translated with i18n keys
- Language selector with active state highlighting (blue background for selected language)

**IntroPage Enhancement (November 2025):**
- Redesigned luxury intro page with complete Art Déco logo
- Removed rotating clock hand, replaced with sophisticated motion design
- Features: scale animation with elastic easing, subtle brightness pulse, expanding golden concentric circles
- Ambient golden glow effect (radial gradient blur) pulsing in background
- 6 floating golden particles with staggered delays and upward motion
- Bottom text "Maison du Temps" with fade in/out animation
- Pure white background (#FFFFFF), 3.5s total duration with 0.8s fade-out
- Session-based visibility (appears once per session via sessionStorage)

**Previous Palace-Level UX/Design Enhancements:**
- Upgraded Hero component with parallax effects, animated gradients, and fluid typography
- Enhanced ServiceCard with sophisticated hover states and scroll-triggered animations
- Enriched Footer with luxury design, micro-animations, and elegant social icons
- Created ScrollReveal utility component for consistent scroll-triggered animations
- Improved Formations and Tarifs pages with premium layouts and refined tables
- Optimized global typography with enhanced spacing, shadows, and refined CSS utilities
- Added ambient background gradients and subtle motion effects throughout

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The application uses **Next.js 14 with App Router** and TypeScript, implementing a fully static site generation approach. The routing structure follows Next.js conventions with locale-based paths using `[locale]` dynamic segments.

**Styling approach:** Tailwind CSS v3 serves as the primary styling framework, extended with a custom design system defined in `tailwind.config.ts`. The design system includes custom color tokens (palace-ivory, palace-anthracite, palace-blue-deep, palace-green-pine) reflecting the luxury brand identity. UI components leverage shadcn/ui library for consistent, accessible interface elements.

**Animation strategy:** Framer Motion powers all animations with palace-level sophistication. Features include parallax scrolling effects in Hero sections, ambient gradient animations, scroll-triggered reveals via the `ScrollReveal` utility, refined hover states with scale and color transitions, and fluid entrance animations. Components leverage useScroll and useTransform hooks for performance-optimized scroll-based effects. All animations respect prefers-reduced-motion for accessibility.

**Typography:** Google Fonts integration loads Fraunces (display/headings) and Inter (body text) via next/font for optimal performance and zero layout shift.

**Component architecture:** Follows a modular structure with separation between layout components (Header, Footer), section components (Hero, ServiceCard, TestimonialsCarousel), and reusable UI primitives (Button, Card). Components are client-side rendered when interactivity is needed ("use client" directive), otherwise server-rendered by default.

## Internationalization

**i18n implementation:** next-intl library provides internationalization with French as the default locale and English as an optional locale. Translation messages are stored in JSON files under `messages/` directory (fr.json, en.json).

**Routing strategy:** Custom middleware intercepts requests to prepend locale prefixes. The routing configuration in `i18n/routing.ts` defines available locales and creates locale-aware navigation utilities (Link, redirect, usePathname, useRouter).

**Locale detection:** The middleware configuration matches paths for both locales and defaults to French for unmatched or missing locale parameters.

## Content Management

**Static content approach:** All content is stored as JSON files in the `data/` directory:
- `services.json` - Service offerings with pricing, durations, descriptions
- `formations.json` - Training programs with modules and certification info
- `brands.json` - Partner brand information
- `testimonials.json` - Client testimonials with ratings

**Dynamic routing:** Service detail pages use Next.js dynamic routes (`[slug]`) with `generateStaticParams()` to pre-render all service pages at build time based on JSON data.

**Content structure:** Services include metadata (slug, title, category), pricing (priceFrom, durations), descriptive content (summary, description, benefits), and optional image references.

## SEO and Performance

**SEO optimization:** Implements next-seo for metadata management, includes a dynamic sitemap generator (`sitemap.ts`) that creates entries for all services and main pages, and provides a robots.txt file for crawler instructions.

**Performance optimizations:**
- Next.js Image component with AVIF/WebP format support
- Custom device size breakpoints for responsive images
- Font optimization via next/font with swap display strategy
- Static page generation for all routes
- Cache-Control headers configured to prevent stale content

**Core Web Vitals focus:** Font loading strategy, lazy loading, and optimized bundle splitting target high performance scores.

## Navigation and User Experience

**Header component:** Fixed position header with scroll-based styling changes (transparency, blur, shadow). Includes mobile menu with AnimatePresence for smooth enter/exit transitions.

**Footer component:** Multi-column layout with contact information, navigation links, social media, and legal pages. Includes decorative background elements with blur effects.

**IntroPage:** Refined Art Déco introduction page displaying the Maison du Temps logo with an animated clock hand rotating counter-clockwise on a pure white background. The component uses Framer Motion for smooth animations (4-second rotation cycle, 3.5-second display duration with fade-out), sessionStorage for session-based visibility (appears only on first visit), and lazy state initialization to prevent visual flicker. The design features a fine black clock hand (1.5px width) centered in the logo's circle, creating a sophisticated loading experience that symbolizes suspended time. Fully responsive across all devices.

## Form Handling

**Client-side forms:** Reservation and contact forms use React state management with controlled inputs. Form submission currently triggers browser alerts (placeholder for future server-side integration).

**Validation:** Basic HTML5 validation with required fields. No advanced validation or error handling implemented yet.

## Accessibility

**WCAG considerations:** Semantic HTML structure, aria-labels on navigation elements, keyboard-navigable components, focus visible styles, and sufficient color contrast ratios following the design system.

# External Dependencies

## Core Framework Dependencies

- **Next.js 16.0.1** - React framework with App Router for SSG and routing
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety and developer experience

## Styling and UI

- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **tailwindcss-animate 1.0.7** - Animation utilities
- **shadcn/ui components** - Pre-built accessible components (button, card, etc.)
- **class-variance-authority 0.7.1** - Component variant management
- **clsx 2.1.1** and **tailwind-merge 3.3.1** - Utility for merging Tailwind classes

## Animation and Interaction

- **Framer Motion 12.23.24** - Animation library for React
- **lucide-react 0.548.0** - Icon library

## Internationalization

- **next-intl 4.4.0** - i18n library for Next.js with middleware support

## SEO and Analytics

- **next-seo 7.0.1** - SEO metadata management
- **@vercel/analytics 1.5.0** - Web analytics integration

## Typography

- **Google Fonts (Fraunces, Inter)** - Loaded via next/font for optimized web font delivery

## Development

- **autoprefixer 10.4.21** - CSS vendor prefixing
- **postcss 8.5.6** - CSS transformation
- **TypeScript type definitions** - @types/node, @types/react, @types/react-dom

## Deployment Platform

- **Vercel** - Configured for deployment with custom port (5000) for development and production servers