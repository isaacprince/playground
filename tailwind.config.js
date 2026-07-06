/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        agrandir: ["var(--font-agrandir)"],
        agrandirBold: ["var(--font-agrandir-bold)"],
        neueMachina: ["var(--font-neue-machina)"],
        neueMachinaBold: ["var(--font-neue-machina-bold)"],
        chalkduster: ["var(--font-chalkduster)"],
      },

      animation: {
        scroll: "scroll 25s linear infinite",
        scrolltwo: "scrollRight 25s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
