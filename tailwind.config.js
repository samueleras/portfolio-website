/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E3C6F",
        secondary: "#2C2B2E",
        accent: "#BFA9D2",
        highlight: "#F4E1F7",
        textPrimary: "#FFFFFF",
        textSecondary: "#CFCFCF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        card: "10px",
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
