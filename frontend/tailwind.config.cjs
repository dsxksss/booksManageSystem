/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
          "primary": "#4b5563",
          "secondary": "#0284c7",
          "accent": "#0891b2",
          "neutral": "#374151",
          "base-100": "#1d232a",
          "info": "#0ea5e9",
          "success": "#6ee7b7",
          "warning": "#ea580c",
          "error": "#ef4444",
      },
    ],
  },
  plugins: [require("daisyui")],
}
