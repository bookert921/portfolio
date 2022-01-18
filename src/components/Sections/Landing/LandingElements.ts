import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Container, {
  name: "LandingContainer",
})<{ navHeight: number }>(({ navHeight }) => ({
  display: "flex",
  flexDirection: "column",
  height: `calc(100vh - ${navHeight}px)`,
  alignItems: "center",
  justifyContent: "center",
}));

export const ContentWrapper = styled(Box, {
  name: "HeroContentWrapper",
})(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const HeroContent = styled(Box, {
  name: "ContentGrid",
})(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows:
    "minmax(200px, max-content) max-content",
  gridTemplateAreas: `"image"
  "text"`,
  textAlign: "center",
  gap: "1em",
  [theme.breakpoints.up("tablet")]: {
    gridTemplateColumns:
      "minmax(200px, max-content) max-content",
    gridTemplateRows: "1fr",
    gridTemplateAreas: `"image text"`,
    gap: 0,
  },
  ["@media screen and (max-width: 768px, orientation: landscape)"]:
    {
      gridTemplateColumns:
        "minmax(200px, max-content) max-content",
      gridTemplateRows: "1fr",
      gridTemplateAreas: `"image text"`,
      gap: 0,
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

export const TextContainer = styled(Box)(() => ({
  gridArea: "text",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  flex: "1 1 50px",
  flexWrap: "wrap",
}));

export const HeroImage = styled(Box)(() => ({
  height: "200px",
  width: "200px",
}));
