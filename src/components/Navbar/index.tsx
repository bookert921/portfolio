import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import NavMenu from "@components/Navbar/NavMenu";
import DarkMode from "@components/Navbar/DarkMode";
import NavLinks from "./NavLinks";

import { NavbarProps } from "types/interfaces";
import Sidebar from "@components/Navbar/Sidebar";
import React, { useContext, useEffect } from "react";
import { PageContext } from "@contexts";

import Helmet from "react-helmet";

const Navbar: React.FC<NavbarProps> = ({
  links,
  theme,
  toggleTheme,
}) => {
  const { setRef, sideOpen, fixed } =
    useContext(PageContext);
  const muiTheme = useTheme();
  const mobile = useMediaQuery(
    muiTheme.breakpoints.down("tablet")
  );

  useEffect(() => {
    if (sideOpen) {
      const el = document.getElementById("about");
      if (
        el &&
        window.scrollY > window.innerHeight * 0.5 &&
        window.scrollY <
          window.innerHeight + window.innerHeight * 0.1
      ) {
        el.scrollIntoView();
      } else if (
        window.scrollY <=
        window.innerHeight * 0.5
      ) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }, [sideOpen]);

  return (
    <React.Fragment>
      <Helmet>
        <body className={sideOpen ? "blur" : ""} />
      </Helmet>
      <AppBar
        ref={setRef}
        data-refkey="navbarEl"
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
          {mobile && <NavMenu open={sideOpen} />}
          <DarkMode
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </Toolbar>
        <Sidebar
          open={sideOpen}
          links={links}
          orientation={fixed}
        />
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
