/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {
   fontSize: {
    "3xs": "0.5rem",
    "2xs": "0.65rem",
   },
   colors: {
    primary: {
     400: "#26a1c4",
     DEFAULT: "#0471a9",
    },
    secondary: {
     DEFAULT: "#30c4ca",
     900: "#32116b",
    },
   },
   screens: {
    "0.5sm": "340px",
   },
  },
 },
 plugins: [],
};
