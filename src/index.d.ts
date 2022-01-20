import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobileS: true;
    mobile: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    FourK: true;
  }
}
