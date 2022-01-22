import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingWrapper = styled(Box, {
  name: "LandingWrapper",
})(() => ({
  height: "100vh",
  width: "100%",
  flexGrow: 1,
  paddingTop: "2em",
  ["@media (orientation: landscape)"]: {
    paddingTop: "1em",
  },
}));
