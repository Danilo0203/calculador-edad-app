/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', defaultTheme.fontFamily.poppins],
      },
    },
    colors: {
      primaryPurple: "hsl(var(--primary-purple))",
      primaryLightred: "hsl(var(--primary-light-red))",
      neutralWhite: "hsl(var(--neutral-White))",
      neutralOffWhite: "hsl(var(--neutral-Off-white))",
      neutralLightGrey: "hsl(var(--neutral-Light-grey))",
      neutralSmokeyGrey: "hsl(var(--neutral-Smokey-grey))",
      neutralOffBlack: "hsl(var(--neutral-Off-black))",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      state: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  plugins: [],
};
