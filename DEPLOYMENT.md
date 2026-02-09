# LUMAR Website - Deployment Guide

## Quick Start (Local Development)

1. **Extract the project files** to your desired location
2. **Open terminal** in the project folder
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```
5. **Open browser** to `http://localhost:5173`

## Production Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - OR use CLI: `netlify deploy --prod`

4. **Custom Domain**: Add your domain in Netlify dashboard settings

### Option 2: Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts** to connect your project

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js** (add your repo name):
   ```javascript
   base: '/your-repo-name/'
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting (cPanel, etc.)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload contents of `dist` folder** to your web hosting:
   - Via FTP
   - Via cPanel File Manager
   - Via hosting provider's upload tool

3. **Ensure** your server serves `index.html` for all routes

## Environment Variables (if needed)

Create a `.env` file in the root:
```
VITE_WHATSAPP_NUMBER=4915565999683
VITE_EMAIL=info@lumarglobal.com
```

Then update components to use `import.meta.env.VITE_WHATSAPP_NUMBER`

## Custom Domain Setup

1. **Point your domain** to your hosting provider:
   - For Netlify/Vercel: Follow their DNS instructions
   - For traditional hosting: Point A record to server IP

2. **SSL Certificate**: Most modern hosts provide free SSL (Let's Encrypt)

## Performance Optimization

The build is already optimized, but you can:

1. **Enable compression** on your server (Gzip/Brotli)
2. **Set cache headers** for static assets
3. **Use a CDN** for global distribution

## Troubleshooting

**White screen after deployment?**
- Check browser console for errors
- Verify `base` path in `vite.config.js` matches your deployment path

**Images not loading?**
- Ensure assets are correctly copied to `dist` folder
- Check image paths in components

**Fonts not working?**
- Verify font files are in `dist/assets/fonts/`
- Check CSS font-face paths

## Testing Before Deployment

```bash
npm run build
npm run preview
```

This runs a local preview of the production build.

## Support

For issues or questions:
- Email: info@lumarglobal.com
- WhatsApp: +49 155 65999683
