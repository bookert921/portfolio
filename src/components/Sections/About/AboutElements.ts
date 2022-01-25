import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutSection = styled(Box, {
  name: "AboutSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  flexDirection: "column",
}));
