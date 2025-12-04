// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 1. Scan the main HTML file (index.html)
    "./index.html", 
    
    // 2. CRITICAL: Scan all JavaScript/JSX/TypeScript files inside the src directory
    // This tells Tailwind to find classes in App.jsx, Hero.jsx, Navigation.jsx, etc.
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}