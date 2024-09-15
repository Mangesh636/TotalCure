import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        malachite: {
          "50": "#f1fdf0",
          "100": "#defcdc",
          "200": "#bff7bb",
          "300": "#8bef86",
          "400": "#4ddd46",
          "500": "#29c522",
          "600": "#1ca316",
          "700": "#198015",
          "800": "#186516",
          "900": "#155314",
          "950": "#052e05",
        },
      },
    },
  },
  plugins: [],
};
export default config;
