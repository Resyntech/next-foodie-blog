module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      keyframes: {
        "load-light": {
          "1%": {
            "background-color": "#681a1a",
          },
        },
        "load-dark": {
          "1%": {
            "background-color": "#0f172a",
          },
        },
      },
      animation: {
        loadLight: "load-light 0.5s infinite",
        loadDark: "load-dark 0.5s infinite",
      },
      colors: {
        themeColor: "#681A1A",
        footerColor: "#E6E6E6",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
