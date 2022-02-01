import { NavLink } from "types/interfaces";
import ResumeButton from "../ResumeButton";
import {
  LinksWrapper,
  NavList,
  NavListElement,
  StyledLink,
} from "./NavLinkElements";

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
