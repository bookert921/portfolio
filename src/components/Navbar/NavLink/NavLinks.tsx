import { NavLink } from "@types";
import ResumeButton from "../ResumeButton";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "gatsby";
import { Link as LinkS } from "react-scroll";
import Logo from "../Logo";
import { useMediaQuery } from "@mui/material";

const LinksWrapper = styled("div")`
  width: 100%;
`;

const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
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

const StyledLink = styled(LinkS)(({ theme }) => ({
  cursor: "pointer",
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

const HomeLink = styled(Link)(() => ({
  cursor: "pointer",
  textDecoration: "none",
}));

const NavLinks: React.FC<{
  onClickCloseSide?: () => void;
}> = ({ children, onClickCloseSide }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const links = (children as NavLink[]).map((link, index) => {
    const { url, name } = link;
    return (
      <NavListElement key={index}>
        <StyledLink
          to={url}
          activeClass="active"
          smooth={true}
          duration={300}
          spy={true}
          hashSpy={true}
          offset={-64}
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
        <NavListElement>
          <HomeLink to="/" onClick={smallScreen ? onClickCloseSide : () => {}}>
            <Logo />
          </HomeLink>
        </NavListElement>
        {links}
        <ResumeButton url="/resume.pdf" />
      </NavList>
    </LinksWrapper>
  );
};

export default NavLinks;
