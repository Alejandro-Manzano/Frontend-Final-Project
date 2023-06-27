import { lighten, darken } from "./colorManipulator";
import { spacing } from "./utils";

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PALETTE_COLOR_LIGHT = {
  mainColor: "#fff",
  // accent: "#25d366",
  accent: "blue",
  terceary: "#292f40",
  fourth: "#000",
  textColor: "#75809a",
  warning: "#f7bc0c",
  //error: "#f70c0c",
  error: "#000000",
  border: "blue",
  prueba: "red"
};

const PALETTE_COLOR_DARK = {
  mainColor: "#111B21",
  accent: "#25d366",
  terceary: "#f4f5f6",
  fourth: "#000",
  textColor: "#75809a",
  warning: "#f7bc0c",
  error: "#f70c0c",
  prueba: "yellow"
};


export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.mainColor,
    },
    color: {
      main: PALETTE_COLOR_LIGHT.mainColor,
      accent: PALETTE_COLOR_LIGHT.accent,
      terceary: PALETTE_COLOR_LIGHT.terceary,
      fourth: PALETTE_COLOR_LIGHT.fourth,
      textColor: PALETTE_COLOR_LIGHT.textColor,
    },
    button: {
      background: {
        light: PALETTE_COLOR_LIGHT.mainColor,
        accent: PALETTE_COLOR_LIGHT.accent,
        warning: PALETTE_COLOR_LIGHT.warning,
        error: PALETTE_COLOR_LIGHT.error,
      },
      text: {
        light: PALETTE_COLOR_LIGHT.textColor,
        accent: PALETTE_COLOR_LIGHT.mainColor,
        warning: PALETTE_COLOR_LIGHT.fourth,
        error: PALETTE_COLOR_LIGHT.fourth,
      },
    },
    border: {
      main: PALETTE_COLOR_LIGHT.border,
      light: PALETTE_COLOR_LIGHT.border,

      dark: PALETTE_COLOR_LIGHT.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Rubik-Bold.ttf",
      italic: "/assets/fonts/Rubik-Italic.ttf",
      regular: "/assets/fonts/Rubik-Regular.ttf",
      semibold: "/assets/fonts/Rubik-SemiBold.ttf",
    },
  },
  spacing,
  typography: {
    fonts: {
      bold: "/assets/fonts/Rubik-Bold.ttf",
      italic: "/assets/fonts/Rubik-Italic.ttf",
      regular: "/assets/fonts/Rubik-Regular.ttf",
      semibold: "/assets/fonts/Rubik-SemiBold.ttf",
    },
  },
};

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.mainColor,
    },
    color: {
      main: PALETTE_COLOR_DARK.mainColor,
      accent: PALETTE_COLOR_DARK.accent,
      terceary: PALETTE_COLOR_DARK.terceary,
      fourth: PALETTE_COLOR_DARK.fourth,
      textColor: PALETTE_COLOR_DARK.textColor,
    },
    button: {
      background: {
        light: PALETTE_COLOR_DARK.mainColor,
        accent: PALETTE_COLOR_DARK.accent,
        warning: PALETTE_COLOR_DARK.warning,
        error: PALETTE_COLOR_DARK.error,
      },
      text: {
        light: PALETTE_COLOR_DARK.textColor,
        accent: PALETTE_COLOR_DARK.mainColor,
        warning: PALETTE_COLOR_DARK.fourth,
        error: PALETTE_COLOR_DARK.fourth,
      },
    },
    border: {
      main: PALETTE_COLOR_DARK.border,
      light: PALETTE_COLOR_DARK.border,
      dark: PALETTE_COLOR_DARK.border,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: "/assets/fonts/Rubik-Bold.ttf",
      italic: "/assets/fonts/Rubik-Italic.ttf",
      regular: "/assets/fonts/Rubik-Regular.ttf",
      semibold: "/assets/fonts/Rubik-SemiBold.ttf",
    },
  },
  spacing,
};
