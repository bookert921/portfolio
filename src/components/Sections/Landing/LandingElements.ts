import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    height: "100vh",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: "4em",
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flow-root",
  [theme.breakpoints.up("sm")]: {
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  height: "250px",
  width: "250px",
  float: "left",
  shapeOutside: "circle(50%)",
  marginRight: ".5em",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    float: "none",
    shapeOutside: "none",
  },
}));
