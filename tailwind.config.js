module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Montserrat", "sans-serif"],
        neue: ["neue-kabel", "sans-serif"],
      },
      colors: {
        header: "#071822",
        headerBar: "#e7e7e7",
        barText: "#353535",
        bannerBox: "#8c8f91",
        gradTop: "rgba(238, 236, 236, 0.3)",
        badgeBg: "#ffcc00",
        fullRangeBg: "#e7e7e7",
      },
      borderWidth: {
        12: "12px",
      },
    },
    debugScreens: {
      position: ["top", "left"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
