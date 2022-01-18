import { Theme, createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const theme = (mode: PaletteMode): Theme =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#051622",
            },
            secondary: {
              main: "#1BA098",
            },
            text: {
              primary: "#051622",
              secondary: "#1BA098",
            },
            background: {
              paper: "#051622",
              default: "#F7F8F9",
            },
          }
        : {
            primary: {
              main: "#1B1919",
            },
            secondary: {
              main: "#FAB169",
            },
            background: {
              paper: "#1B1919",
              default: "#272727",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#FAB169",
            },
          }),
    },
    breakpoints: {
      values: {
        mobileS: 320,
        mobile: 375,
        mobileL: 425,
        tablet: 768,
        laptop: 1024,
        laptopL: 1440,
        FourK: 2560,
      },
    },
    typography: {
      fontFamily: "Cabin Condensed",
      h1: {
        fontFamily: "Bitter",
        fontSize: "4rem",
      },
      h2: {
        fontFamily: "Bitter",
        fontSize: "3.75rem",
      },
      h3: {
        fontFamily: "Bitter",
        fontSize: "3rem",
      },
      h4: {
        fontFamily: "Bitter",
        fontSize: "2.75rem",
      },
      h5: {
        fontFamily: "Bitter",
        fontSize: "2.5rem",
      },
      h6: {
        fontFamily: "Bitter",
        fontSize: "2rem",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          color: "secondary",
          variant: "contained",
        },
        styleOverrides: {
          root: {
            color: "#FFFFFF",
          },
        },
      },
    },
  });

export default theme;
