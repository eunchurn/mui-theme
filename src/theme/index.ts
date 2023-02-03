/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  createTheme,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";
import { colors, Colors } from "./colors";

export * from "./colors";

const defaultTheme = createTheme();

export interface CustomPaletteOptions
  extends Omit<
      PaletteOptions,
      "primary" | "secondary" | "success" | "warning" | "error"
    >,
    Colors {}

export interface CustomThemeOptions extends Omit<ThemeOptions, "palette"> {
  palette?: Partial<CustomPaletteOptions>;
}

declare module "@mui/material/styles" {
  interface Theme {
    palette: CustomPaletteOptions;
  }
  interface ThemeOption extends CustomThemeOptions {}
}

const customPalette: CustomPaletteOptions = {
  ...defaultTheme.palette,
  ...colors,
};

const fontFamily = [
  "Spoqa Han Sans Neo",
  "Pretendard",
  "Poppins",
  "-apple-system",
  "sans-serif",
].join(", ");
const customTypography = {
  fontFamily,
};
const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: "auto",
          scrollbarWidth: "none",
        },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active":
          {
            WebkitBoxShadow: "0 0 0 500px white inset !important",
          },
        "::-webkit-scrollbar": {
          width: 2,
          height: 0,
        },
        "::-webkit-scrollbar-button": {
          background: "#ccc",
        },
        "::-webkit-scrollbar-track-piece": {
          background: "#888",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#eee",
        },
      },
    },
  },
  palette: customPalette,
  typography: { ...customTypography },
  breakpoints: {
    ...customBreakpoints,
  },
};

export const theme = createTheme(themeOptions);
