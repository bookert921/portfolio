import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WorkSection = styled(Box, {
  name: "WorkSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingTop: theme.spacing(5),
  flexDirection: "column",
}));

export const WorkList = styled(Grid, {
  name: "WorkGrid-container",
})(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    justifyContent: "center",
  },
}));
