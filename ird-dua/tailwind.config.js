/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#1FA45B",
        "dua-bg": "#F7F8FA",
        "icon-bg": "#E8F0F5",
      },
      // fontFamily: {
      //   sans: ['Roboto','Product Sans','sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
    },
  },
  plugins: [],
};
