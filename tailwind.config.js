/** @type {import('tailwindcss').Config} */
export default {
  content: [   './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
      screens: {
        exrtaSm:'321px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}

