import { NavLink } from "types/interfaces";
import {
  LinksWrapper,
  NavList,
  NavListElement,
  StyledLink,
} from "./NavLinkElements";

const NavLinks: React.FC = ({ children }) => {
  const activeLink = (url: string) => {
    if (location.hash === url) {
      return "active";
    } else if (
      !location.hash &&
      location.pathname === url
    ) {
      return "active";
    }
  };
  const links = (children as NavLink[]).map(
    (link, index) => {
      const { url, name } = link;
      return (
        <NavListElement key={index}>
          <StyledLink to={url} className={activeLink(url)}>
            {name.slice(0, 1).toUpperCase() + name.slice(1)}
          </StyledLink>
        </NavListElement>
      );
    }
  );

  return (
    <LinksWrapper>
      <NavList>{links}</NavList>
    </LinksWrapper>
  );
};

export default NavLinks;
