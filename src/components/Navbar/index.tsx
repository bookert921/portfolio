import {
  AppBar,
  PaletteMode,
  Toolbar,
} from "@mui/material";
import NavMenu from "@components/Button/NavMenu";
import DarkMode from "@components/Button/DarkMode";

const Navbar: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  theme: PaletteMode;
  toggleTheme: () => void;
}> = ({ open, setOpen, theme, toggleTheme }) => {
  return (
    <AppBar
      position="absolute"
      sx={{
        top: "auto",
        bottom: "0",
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <NavMenu open={open} toggleNav={setOpen} />
        <DarkMode theme={theme} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
