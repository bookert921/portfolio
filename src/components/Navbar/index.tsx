import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import NavMenu from "@components/Button/NavMenu";
import DarkMode from "@components/Button/DarkMode";
import NavLinks from "./NavLinks";
import { links } from "./navConfig";

import { NavbarProps } from "types/interfaces";
import React, { useState, useRef, useEffect } from "react";

const Navbar: React.FC<NavbarProps> = ({
  open,
  setOpen,
  theme,
  toggleTheme,
}) => {
  const [navHeight, setNavHeight] = useState(0);
  const [windowSize, setWindowSize] = useState(
    window.innerHeight
  );
  const [fixed, setFixed] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const muiTheme = useTheme();
  const mobile = useMediaQuery(
    muiTheme.breakpoints.down("sm")
  );

  const fixNav = () => {
    const hasChanged = window.innerHeight !== windowSize;
    if (hasChanged) setWindowSize(window.innerHeight);
    const offset = windowSize - navHeight;
    if (window.scrollY > offset) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    if (navRef.current != undefined) {
      setNavHeight(navRef.current.offsetHeight);
    }
    console.log("use effect is being called");

    window.addEventListener("scroll", fixNav);
    return () =>
      window.removeEventListener("scroll", fixNav);
  }, [navRef.current, windowSize]);

  return (
    <AppBar
      ref={navRef}
      position={fixed ? "fixed" : "absolute"}
      sx={{
        bottom: fixed ? "auto" : 0,
        top: fixed ? 0 : "auto",
      }}
    >
      <Toolbar
        component="nav"
        sx={{ justifyContent: "flex-end", paddingLeft: 0 }}
      >
        {!mobile && <NavLinks>{links}</NavLinks>}
        {mobile && (
          <NavMenu open={open} toggleNav={setOpen} />
        )}
        <DarkMode theme={theme} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
