import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import NavMenu from "@components/Navbar/NavMenu";
import DarkMode from "@components/Navbar/DarkMode";
import NavLinks from "./NavLink/NavLinks";

import { NavbarProps } from "types/interfaces";
import Sidebar from "@components/Navbar/Sidebar";
import { DarkModeContext, RefContext } from "@contexts";
import { useFixedNav, useSidebarOpen } from "@hooks";

import Helmet from "react-helmet";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { refs, setRef } = useContext(RefContext);
  const fixedNav = useFixedNav(refs);
  const { show, sideOpen, setSideOpen } =
    useSidebarOpen(refs);
  const muiTheme = useTheme();
  const mobile = useMediaQuery(
    muiTheme.breakpoints.down("tablet")
  );

  const navigation = mobile ? (
    <React.Fragment>
      <Helmet>
        <body className={sideOpen ? "blur" : ""} />
      </Helmet>

      <NavMenu
        sideOpen={sideOpen}
        setSideOpen={setSideOpen}
      />
      <Sidebar
        show={show}
        sideOpen={sideOpen}
        links={links}
        fixedNav={fixedNav}
        setSideOpen={setSideOpen}
      />
    </React.Fragment>
  ) : (
    <NavLinks>{links}</NavLinks>
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
        {navigation}
        <DarkMode />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
