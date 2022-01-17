import { PaletteMode } from "@mui/material";
import { DarkModeReturn } from "@types";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
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
      }
    }
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    !!localTheme && setMode(localTheme);
  }, []);

  return [theme, toggleTheme] as DarkModeReturn;
};

export default useDarkMode;
