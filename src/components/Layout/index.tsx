import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useDarkMode } from "@hooks";
import React, { useState } from "react";
import { theme } from "@styles";
import Navbar from "@components/Navbar";

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline enableColorScheme />
      <Navbar
        theme={currentTheme}
        toggleTheme={setCurrentTheme}
        open={open}
        setOpen={setOpen}
      />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
