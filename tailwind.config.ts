import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

import svgToDataUri from "mini-svg-data-uri";

import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // NextUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: {
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
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
    // Plugin for Grid background
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;
