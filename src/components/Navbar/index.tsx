import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { NavbarContext } from "./NavbarContext";

const Navbar: React.FC<NavbarProps> = ({
  open,
  setOpen,
  theme,
  toggleTheme,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);

  const { navHeight, setNavHeight } =
    useContext(NavbarContext);
  const navRef = useRef<HTMLElement | null>(null);

  const muiTheme = useTheme();
  const smallerScreen = useMediaQuery(
    muiTheme.breakpoints.down("sm")
  );

  const positionNav = useCallback(() => {
    if (window.scrollY <= window.innerHeight - navHeight) {
      setFixedNav(false);
    } else {
      setFixedNav(true);
    }
  }, [navHeight]);

  useEffect(() => {
    if (navRef.current != null && isMounted) {
      setNavHeight(navRef.current.clientHeight);
    }
    setIsMounted(true);
    window.addEventListener("scroll", positionNav);
    return () => removeEventListener("scroll", positionNav);
  }, [navRef.current, isMounted, positionNav]);

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
        sx={{ justifyContent: "flex-end", paddingLeft: 0 }}
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
