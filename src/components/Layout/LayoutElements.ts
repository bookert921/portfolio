import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledMainWrapper = styled(Container, {
  name: "MainWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
}));
