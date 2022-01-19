import {
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode, useDOMRef, useSticky } from "@hooks";
import { useState } from "react";
import { theme } from "@styles";
import NavbarContextProvider from "@components/Navbar/NavbarContext";
import { StickyProps } from "types/interfaces";

const Main = styled(Box, {
  name: "MainContentWrapper",
  label: "Root",
})(() => ({
  height: "100vh",
  width: "100%",
}));

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);
  const [DOMRef, setRef] = useDOMRef();
  const fixed = useSticky(DOMRef as StickyProps);

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />

      <NavbarContextProvider>
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          open={open}
          setOpen={setOpen}
          fixed={fixed}
          setRef={setRef}
        />
        <Main
          component="main"
          ref={setRef}
          data-refkey="mainEl"
        >
          {children}
        </Main>
      </NavbarContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
