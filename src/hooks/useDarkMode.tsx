import { PaletteMode } from "@mui/material";
import {
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: PaletteMode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = (value?: PaletteMode) => {
    if (value != undefined) {
      switch (value) {
        case "light":
          return setMode("light");
        case "dark":
          return setMode("dark");
        default:
          return setMode("light");
      }
    }
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    !!localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme] as [
    PaletteMode,
    (value?: PaletteMode | undefined) => void
  ];
};

export default useDarkMode;
