import {
  styled,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { useState } from "react";
import { theme } from "@styles";

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  const muiTheme = useTheme();
  const media = useMediaQuery(
    muiTheme.breakpoints.up("sm")
  );

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />

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
