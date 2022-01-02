import { createTheme } from "@shopify/restyle";
import gruvbox from "./colors";

const appDarkTheme = createTheme({
  colors: {
    mainBackground: gruvbox.primary.background,
    mainForeground: gruvbox.primary.foreground,
    normal_black: gruvbox.normal.black,
    normal_red: gruvbox.normal.red,
    normal_green: gruvbox.normal.green,
    normal_yellow: gruvbox.normal.yellow,
    normal_blue: gruvbox.normal.blue,
    normal_magenta: gruvbox.normal.magenta,
    normal_cyan: gruvbox.normal.cyan,
    normal_white: gruvbox.normal.white,
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
    bodyText: {
      fontSize: 16,
      width: '100%',
      paddingVertical: 's',
      paddingHorizontal: 'm',
    },
    innerComponentText: {
      fontSize: 16,
      flex: 1,
      paddingVertical: 's',
      paddingHorizontal: 's',
    },
  },
});

export type Theme = typeof appDarkTheme;
export default appDarkTheme;
