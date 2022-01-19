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
