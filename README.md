# Supreme Group Website

A modern, fully responsive React-based corporate website for Supreme Group, showcasing innovative nonwoven automotive and industrial solutions. The site emphasizes performance, accessibility, and immersive visuals through smooth animations, responsive layouts, and rich media integration.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Component Architecture](#component-architecture)
- [Responsive Design](#responsive-design)
- [Performance Optimization](#performance-optimization)
- [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
- [Design Decisions](#design-decisions)
- [Future Enhancements](#future-enhancements)

## Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all device sizes
- **Smooth Animations**: Framer Motion-powered scroll-based animations and transitions
- **Interactive Carousels**: Swiper.js integration for mobile-friendly feature showcases
- **Video Integration**: Optimized video backgrounds and embedded media
- **Accessibility First**: WCAG-compliant markup with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Lazy-loaded assets, memoized components, and atomic CSS styling
- **Modern UI**: Clean design with Tailwind CSS utility-first styling

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or above)
- **npm** or **yarn**

## Deployed Link 

- **https://supreme-group-amber.vercel.app/**

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Sarvesh-1999/Supreme-group.git
   \`\`\`

2. Navigate into the project folder:
   \`\`\`bash
   cd Supreme-group
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Running the Project

### Development Server

Start the development server with hot module reloading:

\`\`\`bash
npm run dev
\`\`\`

The application will typically run at `http://localhost:5173/` (if using Vite).

### Production Build

Build the project for production:

\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
src/
├── assets/                      # Media assets (videos, images, logos)
│
├── components/                  # Reusable UI components
│   ├── Navbar.jsx              # Navigation bar with scroll behavior
│   ├── Hero.jsx                # Full-width video banner
│   ├── ComprehensiveSolutions.jsx  # Interactive solutions showcase
│   ├── GetInTouch.jsx           # Contact form section
│   └── Footer.jsx              # Footer with links and info
│
├── pages/                       # Page-level components
│   └── Home.jsx                # Main page container
│
├── App.jsx                      # Root component
├── index.css                    # Tailwind and global styles
└── main.jsx                     # React entry point
\`\`\`

## Component Architecture

| Component | Description |
|-----------|-------------|
| **Navbar.jsx** | Fixed navigation bar with scroll-hide behavior, brand logo, LinkedIn link, and language toggle |
| **Hero.jsx** | Full-width video background banner with overlay text highlighting the brand tagline |
| **ComprehensiveSolutions.jsx** | Core interactive section with Framer Motion animations, Swiper sliders, and categorized vehicle videos |
| **GetInTouch.jsx** | Contact form with input validation and company contact details |
| **Footer.jsx** | Responsive footer with navigation links, address, and copyright information |
| **Home.jsx** | Page container combining all sections in structured order |

## Responsive Design

The design follows a mobile-first strategy using Tailwind CSS responsive utilities:

- **Breakpoints**: `sm:`, `md:`, `lg:`, and `xl:` for adaptive layouts
- **Flexible Components**: Hidden or restructured elements on smaller screens (e.g., Swiper carousels for mobile)
- **Fluid Typography**: Responsive text sizes that scale appropriately
- **Grid & Flexbox**: Relative units ensure optimal viewing across all devices

Example:
\`\`\`jsx
<h2 className="text-white text-[28px] md:text-4xl font-light leading-tight">
  Soft trims and <span className="text-[#00BFFF]">NVH solutions</span>
</h2>
\`\`\`

## Performance Optimization

The following optimization techniques are implemented:

- **Video Optimization**: Short looped `.mp4` files with `autoPlay`, `muted`, and `loop` attributes for smooth playback
- **Lazy Loading**: Images loaded only when required
- **Framer Motion**: Animations optimized with `whileInView` and `viewport={{ once: true }}` to trigger only once
- **Memoized State**: Minimal re-renders through controlled `useState` and `useRef` usage
- **Atomic CSS**: Tailwind CSS ensures purged styling for minimal CSS bundle size

## Accessibility

Accessibility is integrated throughout all components:

- **Semantic HTML**: Proper use of `<header>`, `<section>`, `<nav>`, `<article>`, and `<footer>` elements
- **ARIA Attributes**: Includes `role="tablist"`, `role="tabpanel"`, `aria-labelledby`, `aria-selected`, and more
- **Video Accessibility**: Video elements include `title` and `aria-label` attributes for screen readers
- **Keyboard Navigation**: Focus styles via `focus-visible:ring` Tailwind utilities with logical tab order
- **Color Contrast**: Proper contrast ratios between text and backgrounds for readability

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React.js** | Component-based UI rendering |
| **Tailwind CSS** | Utility-first responsive styling |
| **Framer Motion** | Scroll-based animations and transitions |
| **Swiper.js** | Mobile-friendly feature carousels |
| **Lucide React** | Lightweight icons (Play/Pause controls) |
| **Google Fonts** | Manrope font for clean, modern typography |

## Design Decisions

- **Single-Page Design**: Website acts as a landing page highlighting company sections without routing
- **Local Form Handling**: Contact form logs data to console (can be extended to backend API)
- **Local Video Hosting**: All `.mp4` assets hosted in the project for optimal performance
- **Accessibility-First**: WCAG-compliant markup with clear focus states and ARIA labeling
- **Frontend Focus**: Static React front-end for presentation and interactivity

## Future Enhancements

- Integrate backend API for form submission and data persistence
- Add i18n (internationalization) support for multi-language functionality
- Implement global state management (Redux/Context API) for scalability
- Optimize videos further using a CDN for faster delivery
- Add dark mode support via Tailwind theme toggle
- Implement analytics tracking for user engagement

## License

This project is part of Supreme Group. For licensing information, please contact the project maintainers.

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository or contact the development team.

---

**Built with React, Tailwind CSS, and Framer Motion** ✨
