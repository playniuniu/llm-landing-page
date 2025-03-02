/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cofco-primary': '#006738',   // 中粮绿色
        'cofco-primary-light': '#228c5c', // 浅绿色
        'cofco-primary-dark': '#004d29', // 深绿色
        'cofco-secondary': '#ffa500', // 橙色作为辅助色
        'cofco-secondary-light': '#ffb733', // 浅橙色
        'cofco-secondary-dark': '#cc8400', // 深橙色
        'cofco-gray': '#f7f9fb',      // 浅灰色背景
        'cofco-dark': '#1a2b32',      // 深色文字
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} 