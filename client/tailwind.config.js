const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: colors.pink["400"],
      secondary: "#fff",
      background: colors.indigo["50"],
      primaryHover: colors.pink["200"],
      secondaryHover: colors.pink["700"],
      text: colors.neutral["900"],
      textSecondary: colors.neutral["500"],
      textTertiary: colors.neutral["300"],
    },
  },
  plugins: [],
};
