/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        atmos: {
          black: "#050505", // Deep Black
          dark: "#0f0f0f",  // Dark Card Background
          accent: {
            start: "#ff4d4d", // Red
            end: "#ff8c00",   // Orange
          }
        }
      },
      backgroundImage: {
        'atmos-gradient': 'linear-gradient(to right, #ff4d4d, #ff8c00)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 77, 77, 0.3)',
        'glow-hover': '0 0 30px rgba(25/5, 140, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
