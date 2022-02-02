import { NavLink } from "types/interfaces";
import ResumeButton from "../ResumeButton";
import { styled } from "@mui/material/styles";
import { Link } from "gatsby";

const LinksWrapper = styled("div")`
  width: 100%;
`;

const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
  margin: 0,
  padding: 0,
  [theme.breakpoints.up("tablet")]: {
    flexDirection: "row",
  },
}));

const NavListElement = styled("li")`
  list-style: none;
`;

const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  fontSize: `${theme.typography.h6.fontSize}`,
  textDecoration: "none",
  "&.active": {
    color: `${theme.palette.secondary.main}`,
    textShadow: `0 2px 2px ${
      theme.palette.mode === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.secondary.dark
    }`,
  },
}));

const NavLinks: React.FC<{
  onClickCloseSide?: () => void;
}> = ({ children, onClickCloseSide }) => {
  const isBrowser = typeof window !== "undefined";
  const showActive = (url: string) => {
    if (url === location.hash) {
      return "active";
    }

    if (!location.hash && url === location.pathname) {
      return "active";
    }

    return "";
  };

  const links = (children as NavLink[]).map((link, index) => {
    const { url, name } = link;
    return (
      <NavListElement key={index}>
        <StyledLink
          to={url}
          className={isBrowser ? showActive(url) : ""}
          onClick={onClickCloseSide}
        >
          {name.slice(0, 1).toUpperCase() + name.slice(1)}
        </StyledLink>
      </NavListElement>
    );
  });

  return (
    <LinksWrapper>
      <NavList>
        {links} <ResumeButton url="/resume.pdf" />
      </NavList>
    </LinksWrapper>
  );
};

export default NavLinks;
