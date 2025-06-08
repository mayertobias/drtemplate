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
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#111827',
        },
        foreground: {
          DEFAULT: '#111827',
          dark: '#f9fafb',
        },
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
}
