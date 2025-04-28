/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      colors: {
        coral: {
          50: 'var(--color-coral-50)',
          100: 'var(--color-coral-100)',
          200: 'var(--color-coral-200)',
          300: 'var(--color-coral-300)',
          400: 'var(--color-coral-400)',
          500: 'var(--color-coral-500)',
          600: 'var(--color-coral-600)',
          700: 'var(--color-coral-700)',
          800: 'var(--color-coral-800)',
          900: 'var(--color-coral-900)',
        },
        peach: {
          50: 'var(--color-peach-50)',
          100: 'var(--color-peach-100)',
          200: 'var(--color-peach-200)',
          300: 'var(--color-peach-300)',
          400: 'var(--color-peach-400)',
          500: 'var(--color-peach-500)',
          600: 'var(--color-peach-600)',
          700: 'var(--color-peach-700)',
          800: 'var(--color-peach-800)',
          900: 'var(--color-peach-900)',
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};