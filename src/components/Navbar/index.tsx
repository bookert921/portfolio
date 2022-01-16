import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavMenu from "@components/Button/NavMenu";
import DarkMode from "@components/Button/DarkMode";
import { useEffect, useRef, useState } from "react";
import { NavbarProps } from "types/interfaces";
import NavLinks from "./NavLinks";

const links = [
  { url: "/", name: "home" },
  { url: "/about", name: "about" },
  { url: "/work", name: "work" },
  { url: "/projects", name: "projects" },
  { url: "/contact", name: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  open,
  setOpen,
  theme,
  toggleTheme,
}) => {
  const navRef = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [fixedNav, setFixedNav] = useState(false);
  const muiTheme = useTheme();
  const smallerScreen = useMediaQuery(
    muiTheme.breakpoints.down("sm")
  );

  const navPosition = () => {
    if (window.scrollY <= window.innerHeight - navHeight) {
      setFixedNav(false);
    } else {
      setFixedNav(true);
    }
  };

  useEffect(() => {
    if (navRef.current != null) {
      setNavHeight(navRef.current.clientHeight);
    }
    window.addEventListener("scroll", navPosition);
    return () => removeEventListener("scroll", navPosition);
  }, [navRef.current]);

  return (
    <AppBar
      position={fixedNav ? "fixed" : "absolute"}
      sx={{
        top: fixedNav ? "" : "auto",
        bottom: fixedNav ? "" : "0",
      }}
    >
      <Toolbar
        ref={navRef}
        component="nav"
        sx={{ justifyContent: "flex-end" }}
      >
        {!smallerScreen && <NavLinks>{links}</NavLinks>}
        {smallerScreen && (
          <NavMenu open={open} toggleNav={setOpen} />
        )}
        <DarkMode theme={theme} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
