/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#002768',
          'blue-light': '#003380',
          'blue-dark': '#001a4d',
          gold: '#E0B148',
          'gold-light': '#ecc55c',
          'gold-dark': '#c4993a',
          orange: '#FF6200',
          'orange-light': '#ff7a26',
          'orange-dark': '#e55700',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        },
      },
      fontFamily: {
        lama: ['Lama Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 4vw + 0.5rem, 3rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'pill': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04)',
        'card': '0 4px 24px -4px rgb(0 39 104 / 0.12), 0 8px 16px -6px rgb(0 0 0 / 0.05)',
        'card-hover': '0 20px 40px -12px rgb(0 39 104 / 0.2), 0 12px 24px -8px rgb(0 0 0 / 0.08)',
        'card-modern': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 6px 20px -4px rgb(0 39 104 / 0.08)',
        'card-modern-hover': '0 4px 6px -2px rgb(0 0 0 / 0.04), 0 20px 40px -8px rgb(0 39 104 / 0.15)',
        'glow-gold': '0 0 40px -8px rgb(224 177 72 / 0.4)',
        'glow-blue': '0 0 40px -8px rgb(0 39 104 / 0.3)',
        'orange-glow': '0 0 40px -8px rgb(255 98 0 / 0.5)',
        'inner-soft': 'inset 0 1px 2px 0 rgb(255 255 255 / 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'hero-float': 'heroFloat 8s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'hero-zoom': 'heroZoom 10s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'scale(1.03) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(-8px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 6px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, transparent 50%), linear-gradient(225deg, var(--tw-gradient-to) 0%, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
