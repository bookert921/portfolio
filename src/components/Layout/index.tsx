import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { useState } from "react";
import { theme } from "@styles";
import NavbarContextProvider from "@components/Navbar/NavbarContext";

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />

      <NavbarContextProvider>
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          open={open}
          setOpen={setOpen}
        />
        {children}
      </NavbarContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
