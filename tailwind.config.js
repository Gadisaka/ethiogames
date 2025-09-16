/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ethio-dark": "#1e2a4a",
        "ethio-gold": "#ffd700",
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
      },
    },
  },
  plugins: [],
};
