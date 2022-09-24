/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['dracula','cupcake'],
  },
}