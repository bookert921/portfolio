import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode, useDOMRef, useFixed } from "@hooks";
import { useState } from "react";
import { theme } from "@styles";
import { FixedProps, NavLink } from "types/interfaces";
import { Main } from "./LayoutElements";

const Layout: React.FC<{ siteMap: NavLink[] }> = ({
  children,
  siteMap,
}) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const [DOMRef, setRef] = useDOMRef();
  const fixed = useFixed(DOMRef as FixedProps);

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />

      <Navbar
        theme={currentTheme}
        toggleTheme={setCurrentTheme}
        open={open}
        setOpen={setOpen}
        fixed={fixed}
        setRef={setRef}
        links={siteMap}
      />
      <Main
        component="main"
        ref={setRef}
        data-refkey="mainEl"
      >
        {children}
      </Main>
    </ThemeProvider>
  );
};

export default Layout;
