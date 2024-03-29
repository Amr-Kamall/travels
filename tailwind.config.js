/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        vintage: "url('/vintage.jpg')",
      },
      screens: {
        tablet: "679px",
        myBtn: "400px",
      },
    },
  },
  plugins: [],
};
