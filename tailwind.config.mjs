/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGreen: "var(--darkGreen)",
        lightGreen: "var(--lightGreen)",
        lightSand: "var(--lightSand)",
        shineYellow: "var(--shineYellow)",
        bigOrange: "var(--bigOrange)",
        blackSite: "var(--blackSite)",
      },
    },
  },
  plugins: [],
};
