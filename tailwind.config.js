module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      colors: {
        azasphere: "#00ffe7",
        "azasphere-gradient-start": "#00ffe7",
        "azasphere-gradient-end": "#7f00ff",
      },
    },
  },
  plugins: [],
};
