/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f1ed',
          100: '#e8dfd7',
          200: '#d4c5b3',
          300: '#bb9576',
          400: '#a77f5a',
          500: '#8b6f47',
          600: '#6b5444',
          700: '#3d2817',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coffee: {
          "primary": "#bb9576",
          "secondary": "#8b6f47",
          "accent": "#d4c5b3",
          "neutral": "#3d2817",
          "base-100": "#f5f1ed",
          "base-200": "#e8dfd7",
          "base-300": "#d4c5b3",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}
