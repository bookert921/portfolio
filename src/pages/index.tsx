import About from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  ThemeProvider,
  styled,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import Navbar from "@components/Navbar";

const MainWrapper = styled("main", {
  name: "MainWrapper",
})`
  height: 100vh;
`;

export default function Home() {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useState(false);

  const mainRef = useRef<HTMLElement>(null);

  const [mainHeight, setMainHeight] = useState(0);
  const muiTheme = useTheme();
  const media = useMediaQuery(
    muiTheme.breakpoints.up("sm")
  );

  useEffect(() => {
    if (mainRef.current != undefined) {
      setMainHeight(mainRef.current.offsetHeight);
    }
  }, [mainRef.current?.offsetHeight]);

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />
      <MainWrapper ref={mainRef}>
        <LandingPage />

        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          open={open}
          setOpen={setOpen}
          mainHeight={mainHeight}
        />

        {media ? <About /> : null}
        {media ? <About /> : null}
      </MainWrapper>
    </ThemeProvider>
  );
}
