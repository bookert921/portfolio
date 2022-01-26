import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import DarkMode from "@components/Navbar/DarkMode";
import Navigation from "./Sidebar/Navigation";

import { NavbarProps } from "types/interfaces";
import { RefContext } from "@contexts";
import { useFixedNav, useSidebarOpen } from "@hooks";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { refs, setRef } = useContext(RefContext);
  const fixedNav = useFixedNav(refs);
  const sidebarOpen = useSidebarOpen(refs);
  const theme = useTheme();
  const mobile = useMediaQuery(
    theme.breakpoints.down("tablet")
  );

  return (
    <AppBar
      ref={setRef}
      data-refkey="navbarEl"
      position={fixedNav ? "fixed" : "absolute"}
      sx={{
        top: fixedNav ? 0 : "auto",
        left: 0,
        right: 0,
        bottom: fixedNav ? "auto" : 0,
        zIndex: theme.zIndex.tooltip,
      }}
    >
      <Toolbar
        component="nav"
        sx={{
          justifyContent: "flex-end",
          paddingLeft: 0,
        }}
      >
        <Navigation
          mobile={mobile}
          links={links}
          fixedNav={fixedNav}
          {...sidebarOpen}
        />
        <DarkMode />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
