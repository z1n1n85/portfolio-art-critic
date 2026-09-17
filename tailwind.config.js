module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        paper: "#f3d4de",
        ink: "#211a1c",
        accent: "#7a2e2e",
        rust: "#b66a58",
        stone: "#ffffff",
      },
      boxShadow: {
        soft: "0 16px 50px rgba(28, 27, 25, 0.08)",
      },
    },
  },
  plugins: [],
};
