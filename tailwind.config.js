/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLight: "#1875F0",
        bluePrimary: "#1860EC",
        action: "#27AE60",
        bgMain: "#E5E5E5",
        dark: "#262626",
        darker: "#4F4F4F", 
        primaryGreen:'#27AE60',
        grayPrimary: "#787C90",
        yelloPrimary:'#FDC203',
        whiteGray: "#7F8FA4",
        tableHead: "#EAEEF0"
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Segoe-UI-Bold": ["Segoe-UI-Bold", "sans-serif"],
      },
    },
  },
 plugins: [require("daisyui")],
  daisyui: { 
    base: false,
   
  }
}
