/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        lato: "'Lato', sans-sarif",
      },
      colors:{
        myCol: "#65c51c"
      },
    },
  },
  plugins: [],
}