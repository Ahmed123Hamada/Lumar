# LUMAR - Global Trade & Sourcing Website

A professional, bilingual (English/Arabic) corporate landing page for LUMAR, built with React, Vite, and Tailwind CSS.

## Features

✅ **Bilingual Support**: Full English and Arabic language support with RTL/LTR layout switching
✅ **Responsive Design**: Mobile-first approach with perfect adaptation to all screen sizes
✅ **Brand Compliance**: Uses exact brand colors (#002768, #E0B148, #FF6200, #FFFFFF) and Lama Sans font family
✅ **WhatsApp Integration**: Dynamic WhatsApp links for each opportunity with pre-filled messages
✅ **Smooth Animations**: Professional hover effects and transitions throughout
✅ **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Eye-catching introduction with dual CTAs
2. **Main Commercial Services**: Three core service offerings
3. **Special Trading Division**: Opportunities section with WhatsApp integration
4. **Trust & Security**: Why work with LUMAR
5. **Footer**: Contact information and legal links

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

3. **Build for Production**
```bash
npm run build
```
Production files will be in the `dist` folder.

4. **Preview Production Build**
```bash
npm run preview
```

## Project Structure

```
lumar-website/
├── public/
│   └── logo-navbar.png
├── src/
│   ├── assets/
│   │   ├── fonts/          # Lama Sans font files
│   │   └── images/         # All images
│   ├── components/
│   │   ├── Header.jsx      # Navigation with language toggle
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Services.jsx    # Services section
│   │   ├── Opportunities.jsx  # Special Trading Division
│   │   ├── Trust.jsx       # Trust section
│   │   └── Footer.jsx      # Footer with contact info
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles & fonts
│   ├── LanguageContext.jsx # Language management
│   └── translations.js     # All text content
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Brand Colors

- **Primary Blue**: #002768
- **Gold**: #E0B148
- **Orange**: #FF6200
- **White**: #FFFFFF

## Typography

The site uses the **Lama Sans** font family with the following weights:
- Extra Light (200)
- Light (300)
- Regular (400)
- Medium (500)
- Semi Bold (600)
- Bold (700)

## Language Toggle

The language toggle button is located in the header. Clicking it switches between English and Arabic, automatically adjusting:
- Text content
- Layout direction (LTR/RTL)
- Font alignment
- Navigation structure

## WhatsApp Integration

Each opportunity card has a "Inquire Now" button that opens WhatsApp with a pre-filled message specific to that opportunity. The WhatsApp number is: +49 155 65999683

## Contact Information

- **Website**: lumarglobal.com
- **Email**: info@lumarglobal.com
- **Phone/WhatsApp**: +49 155 65999683

## Customization

### Updating Content
All text content is in `src/translations.js`. Edit this file to update any text on the site.

### Updating Colors
Brand colors are defined in `tailwind.config.js`. Update the `theme.extend.colors.primary` section.

### Adding Images
Place new images in `src/assets/images/` and import them in the relevant component.

## Deployment

The built files can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- etc.

Simply run `npm run build` and upload the `dist` folder contents.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 LUMAR. All rights reserved.
