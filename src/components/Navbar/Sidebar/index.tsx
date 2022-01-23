import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  NavList,
  NavListElement,
  StyledLink,
} from "@components/Navbar/NavLinkElements";
import { Box } from "@mui/material";

import { PageContext } from "@contexts";
import { useTheme } from "@mui/material/styles";

import { NavLink } from "types/interfaces";

const Sidebar: React.FC<{
  open: boolean;
  links: NavLink[];
  fixedNav: boolean;
}> = ({ open, links, fixedNav }) => {
  const { setSideOpen } = useContext(PageContext);
  const menuRef = useRef(null);
  const theme = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setSideOpen(false);
  };

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

  const sideLinks = (
    <NavList>
      {links.map((link, index) => (
        <NavListElement key={index}>
          <StyledLink
            to={link.url}
            className={activeLink(link.url)}
            onClick={handleClose}
          >
            {link.name.slice(0, 1).toUpperCase() +
              link.name.slice(1)}
          </StyledLink>
        </NavListElement>
      ))}
    </NavList>
  );

  const showLinks = show ? sideLinks : null;

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
    setShow(false);
  }, [open, show]);

  return (
    <Box
      ref={menuRef}
      sx={{
        [theme.breakpoints.down("tablet")]: {
          height: "100vh",
          position: "absolute",
          top: fixedNav ? 0 : "unset",
          bottom: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: theme.palette.primary.main,
          width: open ? "50%" : "0",
          transition: "all 0.5s ease",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
      }}
    >
      {showLinks}
    </Box>
  );
};

export default Sidebar;
