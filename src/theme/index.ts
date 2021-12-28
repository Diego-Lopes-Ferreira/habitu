import { createTheme } from "@shopify/restyle";

// gruvbox_material_medium_dark
const gruvbox = { 
  primary: {
    background: "#282828",
    foreground: "#d4be98",
  },
  normal: {
    black: "#3c3836",
    red: "#ea6962",
    green: "#a9b665",
    yellow: "#d8a657",
    blue: "#7daea3",
    magenta: "#d3869b",
    cyan: "#89b482",
    white: "#d4be98",
  },
  bright: {
    black: "#3c3836",
    red: "#ea6962",
    green: "#a9b665",
    yellow: "#d8a657",
    blue: "#7daea3",
    magenta: "#d3869b",
    cyan: "#89b482",
    white: "#d4be98",
  },
};

const appDarkTheme = createTheme({
  colors: {
    mainBackground: gruvbox.primary.background,
    mainForeground: gruvbox.primary.foreground,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
  },
  textVariants: {
    header: {
      fontSize: 24,
    },
  },
});

export type Theme = typeof appDarkTheme;
export default appDarkTheme;
