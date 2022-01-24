import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import NavMenu from "@components/Navbar/NavMenu";
import DarkMode from "@components/Navbar/DarkMode";
import NavLinks from "./NavLinks";

import { DOMRef, NavbarProps } from "types/interfaces";
import Sidebar from "@components/Navbar/Sidebar";
import React, { useContext, useEffect } from "react";
import { RefContext } from "@contexts";

import Helmet from "react-helmet";
import {
  useFixedNav,
  useOnClickOutside,
  useOnWidthResize,
  useToggle,
} from "@hooks";

const Navbar: React.FC<NavbarProps> = ({
  links,
  theme,
  toggleTheme,
}) => {
  const { refs, setRef } = useContext(RefContext);
  const [sideOpen, setSideOpen] = useToggle();
  const fixedNav = useFixedNav(
    refs as DOMRef<HTMLDivElement>
  );
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

  useOnWidthResize(() => setSideOpen(false));

  useOnClickOutside(refs.navbarEl, () =>
    setSideOpen(false)
  );

  return (
    <React.Fragment>
      <Helmet>
        <body className={sideOpen ? "blur" : ""} />
      </Helmet>
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
          {!mobile && <NavLinks>{links}</NavLinks>}
          {mobile && (
            <NavMenu
              sideOpen={sideOpen}
              setSideOpen={setSideOpen}
            />
          )}
          <DarkMode
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </Toolbar>
        <Sidebar
          sideOpen={sideOpen}
          links={links}
          fixedNav={fixedNav}
          setSideOpen={setSideOpen}
        />
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
