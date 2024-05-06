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
        primary: "var(--primary)",
        primaryOpacity: "var(--primaryOpacity)",
        primaryDark: "var(--primaryDark)",
        bodyTextColor: "var(--bodyTextColor)",
        bodyTextOpacityColor: "var(--bodyTextOpacityColor)",
        navTextColor: "var(--navTextColor)",
        accentColor: "var(--accentColor)",
        accentLightColor: "var(--accentLightColor)",
        borderColor: "var(--borderColor)",
        backgroundColor: "var(--backgroundColor)",
        footerIconBackground: "var(--footerIconBackground)",
        white: "var(--white)",
      },
      fontSize: {
        titleFontSize: "var(--titleFontSize)",
        primaryFontSize: "var(--primaryFontSize)",
        secondaryFontSize: "var(--secondaryFontSize)",
        tertiaryFontSize: "var(--tertiaryFontSize)",
        quaternaryFontSize: "var(--quaternaryFontSize)",
        quinaryFontSize: "var(--quinaryFontSize)",
      },
      boxShadow: {
        card: "0px 4px 5px 0px #F0F0F3",
      },
    },
  },
  plugins: [],
};
export default config;
