import { useEffect, useRef, useState } from "react";

import {
  NavList,
  NavListElement,
  StyledLink,
} from "@components/Navbar/NavLinkElements";
import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { SidebarProps } from "types/interfaces";

const Sidebar: React.FC<SidebarProps> = ({
  sideOpen,
  setSideOpen,
  links,
  fixedNav,
}) => {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  const sideLinks = show ? (
    <NavList>
      {links.map((link, index) => (
        <NavListElement key={index}>
          <StyledLink
            to={link.url}
            id={link.name}
            onClick={() => {
              setSideOpen(false);
            }}
          >
            {link.name.slice(0, 1).toUpperCase() +
              link.name.slice(1)}
          </StyledLink>
        </NavListElement>
      ))}
    </NavList>
  ) : null;

  useEffect(() => {
    if (sideOpen) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
    setShow(false);
  }, [sideOpen, show]);

  return (
    <Box
      sx={{
        [theme.breakpoints.down("tablet")]: {
          height: "100vh",
          position: "absolute",
          top: fixedNav ? 0 : "unset",
          bottom: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: theme.palette.primary.main,
          width: sideOpen ? "50%" : "0",
          transition: "all 0.5s ease",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
      }}
    >
      {sideLinks}
    </Box>
  );
};

export default Sidebar;
