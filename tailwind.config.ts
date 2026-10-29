import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "nanando-black": "#0a0a0a",
        "dark-grey": "#171717",
        "nanando-grey": "#525252",
        "nanando-white": "#fafafa",
        "nanando-soft-grey": "#232323",
        "reniala-red": "#E5342A",
        "reniala-red-dark": "#B32922",
        "transparent": "transparent",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
      },
      spacing:{
        "c348": "348px",
        "c75": "75px",
        "c17": "17rem",
        "c575": "575px"
      }
    },
  },
  plugins: [],
};
export default config;
