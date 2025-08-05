# IronFit - Modern Gym Website

A fully responsive, modern gym website built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion animations.

## 🏋️ Features

- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Hover effects, animated sections, and engaging user interactions
- **Performance Optimized** - Built with Next.js 15 for optimal performance
- **Accessibility Focused** - Semantic HTML and ARIA labels for better accessibility
- **SEO Optimized** - Proper meta tags, OpenGraph, and Twitter cards

## 🎨 Design Highlights

- **Hero Section** - Stunning full-screen hero with animated call-to-action
- **About Section** - Company story with animated statistics and features
- **Programs Section** - Interactive program cards with hover animations
- **Pricing Section** - Modern pricing cards with monthly/annual toggle
- **Testimonials** - Customer success stories with star ratings
- **Footer** - Comprehensive footer with newsletter signup and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion + react-intersection-observer
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Font**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ironfit-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Custom button variants
│   │   └── card.tsx         # Card components
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Programs.tsx         # Programs/services section
│   ├── Pricing.tsx          # Pricing section
│   ├── Testimonials.tsx     # Customer testimonials
│   └── Footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎯 Key Components

### Header
- Responsive navigation with mobile hamburger menu
- Smooth scroll navigation
- Dynamic background on scroll
- Animated logo and menu items

### Hero Section
- Full-screen background image with overlay
- Animated text and call-to-action buttons
- Statistics counter
- Scroll indicator

### Programs Section
- Interactive program cards with hover effects
- Image overlays and icon animations
- Feature lists with bullet points
- Call-to-action section

### Pricing Section
- Monthly/Annual billing toggle
- Popular plan highlighting
- Feature comparison lists
- Money-back guarantee section

### Testimonials
- Customer success stories
- Star ratings system
- Achievement badges
- Statistics grid

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `globals.css`:
- Primary: Orange (#FF6B35, #F7931E)
- Background: Black/White with gray variants
- Accent: Green for success states

### Animations
Custom animations are defined in `tailwind.config.ts`:
- Fade in effects
- Slide animations
- Bounce effects
- Hover transformations

### Typography
Uses Geist font family with custom font weights and sizes optimized for readability.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

All components adapt gracefully across different screen sizes with:
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions
- Optimized images

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link to `Header.tsx`
4. Update responsive styles as needed

## 🌟 Performance Features

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting for optimal loading
- **Static Generation** - Pre-rendered pages for better performance
- **Font Optimization** - Optimized Google Fonts loading
- **CSS Optimization** - Purged unused CSS in production

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support or questions, please contact:
- Email: info@ironfit.com
- Phone: (555) 123-4567
- Address: 123 Fitness Street, Gym City, GC 12345

---

Built with ❤️ for the fitness community
