import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import NavMenu from "@components/Button/NavMenu";
import DarkMode from "@components/Button/DarkMode";
import NavLinks from "./NavLinks";

import { NavbarProps } from "types/interfaces";
import Sidebar from "@components/Sidebar";
import React from "react";

const Navbar: React.FC<NavbarProps> = ({
  links,
  open,
  setOpen,
  theme,
  toggleTheme,
  fixed,
  setRef,
}) => {
  const muiTheme = useTheme();
  const mobile = useMediaQuery(
    muiTheme.breakpoints.down("tablet")
  );

  return (
    <AppBar
      ref={setRef}
      data-refkey="navEl"
      position={fixed ? "fixed" : "absolute"}
      sx={{
        top: fixed ? 0 : "auto",
        left: 0,
        right: 0,
        bottom: fixed ? "auto" : 0,
        zIndex: muiTheme.zIndex.tooltip,
      }}
    >
      <Toolbar
        component="nav"
        sx={{
          justifyContent: "flex-end",
          paddingLeft: 0,
        }}
      >
        {!mobile && <NavLinks>{links}</NavLinks>}
        {mobile && (
          <NavMenu open={open} toggleNav={setOpen} />
        )}
        <DarkMode theme={theme} toggleTheme={toggleTheme} />
      </Toolbar>
      <Sidebar
        open={open}
        setOpen={setOpen}
        links={links}
        orientation={fixed}
      />
    </AppBar>
  );
};
export default Navbar;
