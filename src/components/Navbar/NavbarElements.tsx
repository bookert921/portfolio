import { styled } from "@mui/material/styles";
import { Link } from "gatsby";

export const LinksWrapper = styled("div")`
  width: 100%;
`;

export const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const NavListElement = styled("li")`
  list-style: none;
`;

export const StyledLink = styled(Link)(
  ({ theme }) => `
  color: white;
  font-size: ${theme.typography.h6.fontSize};
  text-decoration: none;
  
  &.active {
    color: ${theme.palette.secondary.main};
    text-shadow: 0 2px 2px ${
      theme.palette.mode === "dark"
        ? theme.palette.primary.contrastText
        : theme.palette.secondary.contrastText
    };
  }
`
);
