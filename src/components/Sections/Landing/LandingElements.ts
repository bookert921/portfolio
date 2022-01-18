import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box, {
  name: "LandingContainer",
})(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: "100vh",
}));

export const HeroWrapper = styled(Box, {
  name: "HeroWrapper",
})<{
  navHeight: number;
}>(({ navHeight, theme }) => ({
  display: "flex",
  width: "90%",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  height: `calc(100vh - ${navHeight}px)`,

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
  },
  ["@media screen and (orientation: landscape, max-width: 600px)"]:
    {
      alignItems: "flex-start",
      width: "80%",
      margin: "0 auto",
    },
}));

export const HeroContent = styled(Box, {
  name: "HeroContent",
})(({ theme }) => ({
  display: "flow-root",

  ["@media (max-width: 400px)"]: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5em",
  },

  [theme.breakpoints.up("sm")]: {
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  float: "left",
  width: "200px",
  height: "200px",
  shapeOutside: "circle(50%)",

  marginRight: ".5em",
  ["@media (max-width: 400px)"]: {
    float: "none",
    shapeOutside: "none",
  },
  [theme.breakpoints.up("sm")]: {
    width: "250px",
    height: "250px",
    alignItems: "flex-end",
    float: "none",
    shapeOutside: "none",
    display: "flex",
    justifyContent: "center",
  },
}));
