import { styled } from "@mui/material/styles";
import { Link } from "gatsby";

export const LinksWrapper = styled("div")`
  width: 100%;
`;

export const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  margin: 0,
  padding: 0,
  [theme.breakpoints.up("mobileL")]: {
    flexDirection: "row",
  },
}));

export const NavListElement = styled("li")`
  list-style: none;
`;

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  fontSize: `${theme.typography.h6.fontSize}`,
  textDecoration: "none",
  "&.active": {
    color: `${theme.palette.secondary.main}`,
    textShadow: `0 2px 2px ${
      theme.palette.mode === "dark"
        ? theme.palette.primary.contrastText
        : theme.palette.secondary.contrastText
    }`,
  },
}));
