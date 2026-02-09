# 🚀 LUMAR Website - Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: `http://localhost:5173`

## 📱 What You'll See

✅ **Bilingual website** (English/Arabic) with language toggle
✅ **Responsive design** that works on all devices
✅ **Brand colors**: Blue (#002768), Gold (#E0B148), Orange (#FF6200)
✅ **Custom fonts**: Lama Sans font family
✅ **WhatsApp integration** for each opportunity
✅ **Smooth animations** and professional UI

## 🎯 Main Features

1. **Hero Section** - Eye-catching intro with CTAs
2. **Services Section** - 3 main commercial services
3. **Opportunities Section** - Special trading division with WhatsApp links
4. **Trust Section** - Why work with LUMAR
5. **Footer** - Contact info and legal links

## 🌐 Language Toggle

Click the language button in the header to switch between:
- **English** (LTR layout)
- **العربية** (RTL layout)

Everything adapts automatically!

## 📞 WhatsApp Integration

Each opportunity card has an "Inquire Now" button that:
- Opens WhatsApp
- Pre-fills a message about that specific opportunity
- Sends to: +49 155 65999683

## 🎨 Customization

### Update Text Content
Edit `src/translations.js`

### Update Colors
Edit `tailwind.config.js`

### Update Images
Replace files in `src/assets/images/`

## 🚀 Deploy to Production

```bash
npm run build
```

Then upload the `dist` folder to your hosting service.

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📦 Project Structure

```
lumar-website/
├── src/
│   ├── components/     # All React components
│   ├── assets/         # Images and fonts
│   ├── translations.js # All text content
│   └── index.css       # Global styles
├── public/             # Static files
└── package.json        # Dependencies
```

## 🆘 Need Help?

**Email**: info@lumarglobal.com
**WhatsApp**: +49 155 65999683
**Website**: lumarglobal.com

## ✅ Checklist

- [ ] npm install completed
- [ ] npm run dev running
- [ ] Website opens in browser
- [ ] Language toggle works
- [ ] Mobile responsive checked
- [ ] WhatsApp links tested
- [ ] Ready to customize!

---

**Built with React + Vite + Tailwind CSS**
**© 2026 LUMAR. All rights reserved.**
