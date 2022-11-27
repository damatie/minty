/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLight: "#1875F0",
        blue: "#1860EC",
        lightMustard: "#f4e064",
        peach: "#ffa07a",
        grayish: "#424242",
        grayish2: "#4b4b4b",
        grayish3: "#5a5a5a",
        whiteGray:"#4b4b4b"
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"]
      },
    },
  },
 plugins: [require("daisyui")],
  daisyui: { 
    base: false,
   
  }
}
