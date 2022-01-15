import {
  AppBar,
  PaletteMode,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import NavMenu from "@components/Button/NavMenu";
import DarkMode from "@components/Button/DarkMode";
import { useEffect, useState } from "react";

const Navbar: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  theme: PaletteMode;
  toggleTheme: () => void;
}> = ({ open, setOpen, theme, toggleTheme }) => {
  const [fixedNav, setFixedNav] = useState(false);
  const smallerScreen = useMediaQuery("(max-width: 600px)");

  const navPosition = () => {
    if (window.scrollY <= window.innerHeight) {
      setFixedNav(false);
    } else {
      setFixedNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navPosition);
    return () => removeEventListener("scroll", navPosition);
  }, []);

  return (
    <AppBar
      position={fixedNav ? "fixed" : "absolute"}
      sx={{
        top: fixedNav ? "" : "auto",
        bottom: fixedNav ? "" : "0",
        backgroundColor: fixedNav ? "transparent" : "",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        {smallerScreen && (
          <NavMenu open={open} toggleNav={setOpen} />
        )}
        <DarkMode theme={theme} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
