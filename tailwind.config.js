/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#EBE4DB',
          400: '#DED4C7',
          500: '#CFC2B2',
        },
        charcoal: {
          900: '#141414',
          800: '#1E1E1E',
          700: '#2D2D2D',
          600: '#424242',
          500: '#5C5C5C',
          400: '#757575',
          300: '#A3A3A3',
        },
        taupe: {
          50: '#FBF9F7',
          100: '#F5F1EB',
          200: '#E8E2D8',
          300: '#D6CCC0',
          400: '#B8ABA0',
          500: '#9E8F82',
          600: '#7C6E62',
        },
        roseAccent: {
          50: '#FCF7F7',
          100: '#F9EEEE',
          200: '#F0D4D4',
          300: '#E2B1B1',
          400: '#D18888',
          500: '#C06B6B',
          600: '#A65151',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E3ECE6',
          500: '#6B8E77',
          600: '#53745E',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(20, 20, 20, 0.05), 0 2px 6px -1px rgba(20, 20, 20, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(20, 20, 20, 0.08), 0 4px 10px -2px rgba(20, 20, 20, 0.04)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
