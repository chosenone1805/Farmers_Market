/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "default-green": "#1D4630",
        "default-bg": "#EBFBF7",
        "button-default": "#154735",
        "deal-default": "#1D6E10",
        "default-orange": "#DE8838",
        "input-background": "#DFE7DC",
        "profile-background": "#1F551A",
      },
      colors: {
        "header-p": "rgba(255, 255, 255, 0.75)",
        "default-text": "#1D4630",
      },
      borderColor: {
        "yellow-fine": "#FFCA28;",
        "default-green": "#1D6E10",
        "input-green-border": "rgba(22, 129, 20, 0.50)",
        "default-input": "#215626",
      },

      boxShadow: {
        "inset-shadow-md": "12px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
      },
    },
  },
  plugins: [],
};
