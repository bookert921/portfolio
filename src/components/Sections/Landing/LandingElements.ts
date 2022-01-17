import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box, {
  name: "LandingContainer",
})<{
  navHeight: number;
}>(({ theme, navHeight }) => ({
  display: "flex",
  height: `calc(100vh - ${navHeight}px)`,
  width: "100%",
  flexDirection: "column",
}));
