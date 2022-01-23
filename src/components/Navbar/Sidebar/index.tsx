import {
  NavList,
  NavListElement,
  StyledLink,
} from "@components/Navbar/NavLinkElements";
import { PageContext } from "@contexts";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "types/interfaces";

const Sidebar: React.FC<{
  open: boolean;
  links: NavLink[];
  orientation: boolean;
}> = ({ open, links, orientation }) => {
  const { setSideOpen } = useContext(PageContext);
  const theme = useTheme();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setSideOpen(false);
  };

  const sideLinks = (
    <NavList>
      {links.map((link, index) => (
        <NavListElement key={index}>
          <StyledLink
            to={link.url}
            activeClassName="active"
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
      sx={{
        [theme.breakpoints.down("tablet")]: {
          height: "100vh",
          position: "absolute",
          top: orientation ? 0 : "unset",
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
