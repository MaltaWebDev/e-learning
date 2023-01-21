/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: { sm: "375px", md: "768px" },
    extend: {
      colors: {
        blueGray: "#666CA3",
        darkBlue: "#13183F",
        gray: "#83869A",
        brightPink: "F74780",
        lightPink: "FFA7C3",
        white: "#FFFFFF",
        orangeToPink: "#F02AA6 - #FF6F48",
        blueToPink: "#4851FF - #F02AA6",
      },
    },
    plugins: [],
  },
};
