import { Box } from "@mui/material";
// import About from "../About";
import { styled } from "@mui/material/styles";

export const DesktopContentWrapper = styled(Box, {
  name: "ContentFlexWrapper",
})(() => ({
  height: "100%",
  width: "90%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const DesktopCenterContent = styled(Box, {
  name: "ContentWrapper",
})(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  [theme.breakpoints.down("laptop")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

export const DesktopImageWrapper = styled(Box, {
  name: "ImageWrapper",
})(() => ({
  minHeight: "200px",
  minWidth: "200px",
  maxHeight: "250px",
  maxWidth: "250px",
}));
