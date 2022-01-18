import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box, {
  name: "LandingContainer",
})(() => ({
  display: "flex",
  width: "80%",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
}));

export const HeroContent = styled(Box, {
  name: "HeroContent",
})(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr auto",
  gridTemplateAreas: `"image"
  "text"`,
  textAlign: "center",
  [theme.breakpoints.up("tablet")]: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"image text"`,
    alignItems: "flex-end",
    textAlign: "left",
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  gridArea: "image",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "200px",
}));
