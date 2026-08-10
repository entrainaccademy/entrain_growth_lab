/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          accent: "#C7FF3D",
          hover: "#b0f025",
        },
        dark: {
          bg: "#0A0A0A",
          card: "#141414",
          surface: "#1A1A1A",
          border: "#262626",
        },
        text: {
          primary: "#F5F5F0",
          muted: "#9A9A94",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
