/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#174C4F', deep: '#0F3639', soft: '#1F5F63' },
        sage: { DEFAULT: '#A9C3B0', light: '#C9DACD' },
        ivory: '#FAF8F3',
        gold: { DEFAULT: '#C6A875', dark: '#8A6F3F' },
        charcoal: '#263238',
        muted: '#5F6B6F',
        mint: '#EAF1EB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(23, 76, 79, 0.18)',
        lift: '0 24px 60px -18px rgba(23, 76, 79, 0.28)',
        glass: '0 8px 32px -8px rgba(23, 76, 79, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
