/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "8xl": { max: "1440px" },
      // => @media (max-width: 1535px) { ... }
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%) ",
        moderateCyan: "hsl(170, 45%, 43%) ",
        lightGray: "hsl(0, 0%, 75%)",
        lightGrayishBlue: "hsl(240, 75%, 98%) ",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};
