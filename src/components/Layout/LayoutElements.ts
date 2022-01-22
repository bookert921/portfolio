import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box, {
  name: "PageWrapper",
  label: "Root",
})(() => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
}));

export const Content = styled(Container, {
  name: "ContentWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
  "&.blur": {
    overflow: "hidden",
    filter: "blur(5px) brightness(0.7)",
    transition: "all 0.5s ease",
    pointerEvents: "none",
    userSelect: "none",
  },
}));
