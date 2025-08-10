# Topdeck.ai - AI-Powered Construction Site Intelligence

A modern, scalable Next.js website for Topdeck.ai's construction technology platform, featuring AI-powered jobsite monitoring, crane-mounted cameras, and comprehensive security solutions.

![Topdeck.ai](public/images/topdeck-hero.jpg)

## 🚀 Features

- **Modern Next.js 15** with App Router and TypeScript
- **Responsive Design** optimized for construction industry
- **AI-Powered Intelligence** showcase and features
- **Industrial Design Language** with angular elements and concrete textures
- **Performance Optimized** with image optimization and compression
- **SEO Ready** with proper meta tags and structured data
- **Accessibility** compliant with WCAG guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom industrial theme
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel/Netlify

## 📁 Project Structure

```
topdeck-nextjs/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (pages)/           # Route groups for organization
│   │   │   ├── about/
│   │   │   ├── clients/
│   │   │   ├── contact/
│   │   │   ├── products/
│   │   │   ├── resources/
│   │   │   └── solutions/
│   │   ├── globals.css        # Global styles with Topdeck theme
│   │   ├── layout.tsx         # Root layout with navigation
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   ├── images/                # Static images and assets
│   └── icons/                 # SVG icons and logos
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Design System

### Brand Colors
- **Primary Red**: `#FF0000` - Used for CTAs and highlights
- **Industrial Black**: `#000000` - Primary text and backgrounds
- **Concrete Gray**: `#808080` - Secondary elements
- **White**: `#FFFFFF` - Clean backgrounds and contrast

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800, 900
- **Industrial styling** with bold headers and clean body text

### Design Elements
- **Angular Clips**: Custom CSS for industrial geometric shapes
- **Concrete Textures**: Subtle patterns for construction industry feel
- **Sharp Corners**: No border radius for industrial aesthetic
- **Bold Typography**: Heavy font weights for impact

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/topdeck-nextjs.git
   cd topdeck-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🎯 Key Pages

### Homepage (`/`)
- **Hero Section**: Two-column layout with video placeholder
- **Features Section**: AI-powered construction intelligence
- **Clients Section**: Testimonials and case studies

### Solutions (`/solutions`)
- Project Intelligence solutions
- Construction camera systems
- Security and monitoring features

### Products (`/products`)
- Comprehensive product catalog
- Technical specifications
- Pricing information

### Contact (`/contact`)
- Quote request form
- Contact information
- Company location

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://topdeck.ai
NEXT_PUBLIC_CONTACT_EMAIL=info@topdeck.ai
```

### Customization

1. **Brand Colors**: Update `tailwind.config.ts` and `globals.css`
2. **Typography**: Modify font imports in `layout.tsx`
3. **Content**: Update component content in `/src/components/sections/`
4. **Images**: Add assets to `/public/images/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1920px+ (Full features and animations)
- **Laptop**: 1024px-1919px (Optimized layouts)
- **Tablet**: 768px-1023px (Simplified navigation)
- **Mobile**: 320px-767px (Touch-optimized interface)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Focus indicators on all interactive elements

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta tag implementation
- **Structured Data**: JSON-LD for construction industry
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine optimization
- **Open Graph**: Social media sharing optimization

## 🎨 Custom Components

### HeroSection
Two-column hero with video placeholder and CTA buttons

### FeaturesSection
Grid layout showcasing AI-powered construction features

### ClientsSection
Client logos, testimonials, and case studies

### Navigation
Fixed navigation with dropdown menus and mobile support

## 📊 Performance

- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Compression**: Gzip/Brotli compression enabled
- **Caching**: Optimized caching strategies

## 🔐 Security

- **Content Security Policy**: Implemented CSP headers
- **HTTPS Only**: Force HTTPS in production
- **Input Sanitization**: All form inputs sanitized
- **XSS Protection**: Cross-site scripting prevention

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved by Topdeck.ai.

## 📞 Support

For technical support or questions:

- **Email**: dev@topdeck.ai
- **Documentation**: [docs.topdeck.ai](https://docs.topdeck.ai)
- **Support Portal**: [support.topdeck.ai](https://support.topdeck.ai)

---

Built with ❤️ for the construction industry by the Topdeck.ai team.