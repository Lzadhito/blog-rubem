module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        navbar: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        bgButton: "#E8DEF8",
        seed: "#0C3650",
        tertiary: "#66587B",
        blueCustom: "#006497",
      },
    },
  },
  plugins: [],
};
