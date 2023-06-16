/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", " sans-serif"],
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: " hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
