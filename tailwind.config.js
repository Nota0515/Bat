/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color:{
          "1" : "#333",
          "2" : "#edc79b",
          "3" : "#34252e",
          "4" : "#b87d63",
          "5" : "#865c55",
          "6" : "#623d41",
        },
        n:{
          1 : "#101010",
          2 : "#777774",
          3 : "#050405",
          4 : "#C5C5C3",
          5 : "#DEDEDE",
          6  : "#1F260F",
          7 : "#4E5927",
          8 : "#7C8C42",
          9 : "#B5BF65",
          10 : "#EDF2C2"
        },
      },
      fontFamily: {
        doto: ["Doto", "sans-serif"],
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5", 
      },
      dropShadow: {
        "1" : "0 0 5px rgba(78, 89, 39, 1)",
        "2" : "0 0 30px rgba(78, 89, 39, 1)",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "grayBack": "radial-gradient(ellipse at center, #101010 2%,#050405 100%);",
        "button": "conic-gradient(from 90deg at 50% 50%, #000000, #050505, #0a0a0a, #0e0e0e, #2d2d2c, #6c6b6a, #b3b2b0, #fffefb);",
        "btngradient": "linear-gradient(to right,#1F260F, #4E5927)",
      },
      transitionDuration: {
        "default": "200ms",
      },
      transitionTimingFunction: {
        "default": "linear",
      },
      transitionDelay: {
        "default": "20ms",
      },
      opacity: {
        "default": "1",
        "15": "0.15",
      },
    },
    screens:{
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
    }
  },
  plugins: [],
}
