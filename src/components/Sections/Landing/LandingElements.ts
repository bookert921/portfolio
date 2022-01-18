import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box, {
  name: "LandingContainer",
})(() => ({
  position: "relative",
  display: "flex",
  width: "80%",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  ["@media screen and (orientation: landscape)"]: {
    width: "100%",
  },
}));

export const HeroContent = styled(Box, {
  name: "HeroContent",
})(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `"image"
  "text"`,
  height: "100%",
  textAlign: "center",
  [theme.breakpoints.up("tablet")]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"image text"`,
    alignItems: "flex-end",
    textAlign: "left",
  },
  ["@media screen and (orientation: landscape)"]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"image text"`,
    alignItems: "center",
    textAlign: "left",
    gap: "1em",
  },
}));

export const ImageContainer = styled(Box)(() => ({
  gridArea: "image",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeroImage = styled(Box)(() => ({
  height: "200px",
  width: "200px",
}));
