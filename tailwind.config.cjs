/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "280px",

      sm: "300px",

      minSm: "450px",

      lsm: "600px",

      lssm: "500px",

      xMiniTablet: "650px",

      miniTablet: "700px",

      md: "768px",

      gMd: "769px",

      lgMd: "800px",

      xLgMd: "900px",

      lg: "1024px",

      xl: "1280px",

      lXl: "1281px",

      miniLarge: "1227px",

      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        navHide: {
          from: {
            height: "8rem",
            opacity: "1",
          },

          to: {
            height: 0,
          },
        },
        navDisplay: {
          from: {
            height: 0,
          },
          to: { height: "8rem" },
        },
        navDisplayAnimate: { from: { height: "10rem" }, to: { height: 0 } },
      },
      gridTemplateColumns: {
        "footer": "20% 70%",
      },
      gridTemplateRows: {
      "footer": "65% 30%", "aboutTop": "5rem 10rem 13rem 20rem", "aboutTopResponsive": "5rem 13rem 18rem 20rem", "aboutTopMd": "8rem 18rem"},
      animation: {
        "nav-hide": "navHide .2s ease-in",
        "nav-display": "navDisplay .2s ease-in",
        "nav-display-hide": "navDisplayAnimate .2s ease-in",
      },
      gradientColorStops: {},
    },
    cursor: "/assets",
    backgroundPosition: {
    "right-bottom": "3.5rem 7rem"}
  },
  plugins: [],
};
