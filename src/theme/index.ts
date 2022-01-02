import { createTheme } from "@shopify/restyle";
import gruvbox from './colors';

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
