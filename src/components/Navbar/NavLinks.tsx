import { NavLink } from "types/interfaces";
import {
  LinksWrapper,
  NavList,
  NavListElement,
  StyledLink,
} from "./NavLinkElements";

const NavLinks: React.FC = ({ children }) => {
  const links = (children as NavLink[]).map(
    (link, index) => {
      const { url, name } = link;
      return (
        <NavListElement key={index}>
          <StyledLink to={url} activeClassName="active">
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
