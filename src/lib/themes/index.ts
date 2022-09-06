import { createTheme, PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, common } from "@mui/material/colors";

export const getDesignTokens = (mode?: PaletteMode): any => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          divider: common["black"],
          background: {
            default: common["white"],
            paper: common["white"],
          },
          text: {
            primary: "#8B8B8B",
            secondary: "#FF64AE"
          },
          primary: {
            main: "#091156"
          },
          secondary: {
            main: "#FF64AE"
          }
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: grey[500],
          background: {
            default: common["black"],
            paper: common["black"],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});
