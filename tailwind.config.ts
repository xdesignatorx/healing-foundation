import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F6F2",
        pearl: "#FFFDF8",
        mist: "#EEF3EC",
        sage: "#A9B8A4",
        moss: "#2C614B",
        forest: "#1F4D3A",
        ink: "#17352A",
        sand: "#E6DCC9",
        gold: "#C7A86B",
        rose: "#B98C79"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 77, 58, 0.12)",
        glow: "0 22px 80px rgba(199, 168, 107, 0.24)",
        card: "0 16px 50px rgba(31, 77, 58, 0.10)"
      },
      backgroundImage: {
        "linen": "linear-gradient(135deg, rgba(248,246,242,0.98), rgba(238,243,236,0.92))",
        "deep": "linear-gradient(135deg, #17352A, #1F4D3A)",
        "gold-sheen": "linear-gradient(135deg, #C7A86B, #E8D5A5)"
      }
    }
  },
  plugins: []
};

export default config;
