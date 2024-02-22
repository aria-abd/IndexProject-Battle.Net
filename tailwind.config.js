/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',
        // => @media (min-width: 300300px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'desktop': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      colors: {
        primary: "#15171e",
        secondary: "#23252b",
        button: "#0074e0",
      },
      fontFamily: {
        notobold: "Noto Sans Bold",
        notoregular: "Noto Sans Regular",
        objectSans: "Object Sans",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};

