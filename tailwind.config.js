/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brownish: "rgb(var(--brownish))",
        redish: "rgb(var(--redish))",
        "off-white": "rgb(var(--off-white))",
        bluesy: "rgb(var(--bluesy))",
      },
    },
  },
  plugins: [],
};
