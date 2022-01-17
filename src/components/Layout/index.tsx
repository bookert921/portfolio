import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useDarkMode } from "@hooks";
import React, { useState } from "react";
import { theme } from "@styles";
import Navbar from "@components/Navbar";
import { NavbarContext } from "@components/Navbar/NavbarContext";

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <NavbarContext.Provider
        value={{ navHeight, setNavHeight }}
      >
        <CssBaseline enableColorScheme />
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          open={open}
          setOpen={setOpen}
        />
        {children}
      </NavbarContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
