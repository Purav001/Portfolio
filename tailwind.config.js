/** @type {import('tailwindcss').Config} */

export default ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
      backgroundImage: {
        "bg": "url('/imges/gradient-bg.jpg')",
      },
      colors:  {
        v: '#7c7cb3',
        vBtn: "#8f8fcd",
        vBtnHover: "#7c7cb3",
        vBrd: "#6868cb",
        vBrdHover: "#afafd8"
      }
    }

  },
  plugins: ["prettier-plugin-tailwindcss"],
});
