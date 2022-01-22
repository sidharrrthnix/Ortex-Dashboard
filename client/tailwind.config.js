const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      metal: "#222324",
      theme: "#38ada8",
      lighttheme: "#2dd4bf",
      darkttheme: "",
      header: "#192933",
      form: "#111111",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
