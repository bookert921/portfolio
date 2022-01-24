import { Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WorkWrapper = styled(Container, {
  name: "WorkSection",
})`
  width: 90%;
  margin: 0 auto;
  padding: 5em 0;
`;

export const WorkList = styled(Grid, {
  name: "WorkGrid-container",
})(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    justifyContent: "center",
  },
}));
