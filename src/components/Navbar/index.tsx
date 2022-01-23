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
import React, { useContext } from "react";
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
