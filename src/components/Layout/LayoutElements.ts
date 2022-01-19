import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Main = styled(Box, {
  name: "MainContentWrapper",
  label: "Root",
})(() => ({
  height: "100vh",
  width: "100%",
}));
