import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LandingContainer = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: "4em",

    [theme.breakpoints.up("sm")]: {
      height: "calc(100vh - 4em)",
      marginTop: 0,
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flow-root",
  ["@media (max-width: 400px)"]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5em",
  },
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
  ["@media (max-width: 400px)"]: {
    float: "none",
    shapeOutside: "none",
  },
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    float: "none",
    shapeOutside: "none",
  },
}));
