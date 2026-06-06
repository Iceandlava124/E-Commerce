/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 30px 80px -48px rgba(99, 102, 241, 0.8)',
      },
      colors: {
        brand: {
          950: '#09061a',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

