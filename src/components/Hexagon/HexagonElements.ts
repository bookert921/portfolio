import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// export const HexagonActionCard = styled(Box, {
//   name: "HexagonActionCard",
// })(({ theme }) => ({
//   position: "relative",
//   display: "flex",
//   width: "104px",
//   height: "60px",
//   backgroundColor: theme.palette.primary.main,
//   justifyContent: "center",
//   alignItems: "center",
//   ".hex-top": {
//     width: 0,
//     position: "absolute",
//     top: "-50%",
//     borderLeft: "52px solid transparent",
//     borderRight: "52px solid transparent",
//     borderBottom: `30px solid ${theme.palette.primary.main}`,
//   },
//   ".hex-bottom": {
//     width: 0,
//     position: "absolute",
//     bottom: "-50%",
//     borderTop: `30px solid ${theme.palette.primary.main}`,
//     borderLeft: "52px solid transparent",
//     borderRight: "52px solid transparent",
//   },
// }));

export const StyledHexagon = styled(Box, {
  name: "StyledHexagon",
})(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "100px",
  textShadow: "2px 2px 2px black",
  position: "relative",
  ".inner": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
