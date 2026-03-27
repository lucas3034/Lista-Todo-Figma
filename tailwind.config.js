/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        surface: 'var(--surface)',
        card: 'var(--card)',
        sidebar: 'var(--sidebar)',
        'input-bg': 'var(--input-bg)',
        'btn-primary': 'var(--btn-primary)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'menu-active': 'var(--menu-active)',
        'menu-active-text': 'var(--menu-active-text)',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.25)',
        sidebar: '0 4px 12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
