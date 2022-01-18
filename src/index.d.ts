import {} from "@mui/material/";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileS: true;
    mobile: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    FourK: true;
  }
}
