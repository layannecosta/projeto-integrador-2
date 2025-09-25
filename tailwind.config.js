/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
            primary:"#006081",
            secundary:"#FF6500",
        },
        fontFamily:{
          "ubuntu":["ubuntu", "sans-serif"]
        }
    },
  },
  plugins: [],
}