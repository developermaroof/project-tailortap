/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inner: ["Inter", "sans-serif"],
      },
      colors: {
        hoverColor: "#D5E8D6",
        themeColor: "#38D55B",
        plusIconBg: "#36BC54",
        settingHeadingColor: "#ADFFBF",
        settingGrayColor: "#828282",
        logoutColor: "#FF2727",
      },
      plugins: [],
    },
  },
};
