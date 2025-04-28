/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f3ff',
          100: '#d5e8ff',
          200: '#b3d1ff',
          300: '#80adff',
          400: '#4d88ff',
          500: '#1a63ff',
          600: '#0047e1',
          700: '#0035a8',
          800: '#002370',
          900: '#001238',
        },
        secondary: {
          50: '#f6e8ff',
          100: '#ecd1ff',
          200: '#dba3ff',
          300: '#c975ff',
          400: '#b847ff',
          500: '#9c19e1',
          600: '#7b14b3',
          700: '#5a0f85',
          800: '#3a0a57',
          900: '#1d052b',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefcc',
          200: '#ffdf99',
          300: '#ffcf66',
          400: '#ffbf33',
          500: '#ff9500', // Increased contrast
          600: '#e67700', // Adjusted for better contrast
          700: '#cc5500',
          800: '#993300',
          900: '#662200',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1a374d', // Adjusted for better contrast
          900: '#0c2339', // Darkened for better contrast with light text
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
    },
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}