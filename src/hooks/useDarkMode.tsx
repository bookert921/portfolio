import { PaletteMode } from "@mui/material";
import { ChangeTheme, DarkModeReturn } from "@types";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useStorage";

const useDarkMode = () => {
  const [mode, setTheme] = useState<PaletteMode>("light");
  // Local storage takes in the default theme to start from mode.
  const [value, setValue] = useLocalStorage("theme", mode);

  const toggleTheme: ChangeTheme = (value) => {
    // Provides flexibility to provide a value for button groups.
    if (value != undefined) {
      switch (value) {
        case "light":
          setValue(value);
          return setTheme(value);
        case "dark":
          setValue(value);
          return setTheme(value);
      }
    }

    // If mode changes, first the value is set to local storage
    // Then the value is made a theme
    if (mode === "light") {
      setValue("dark");
      setTheme("dark");
    } else {
      setValue("light");
      setTheme("light");
    }
  };

  // useEffect(() => { // Caused additional rerenders.
  //   console.log("local storage value being changed");
  //   setValue(mode);
  // }, [mode]);

  // Used to update theme from storage value every page visit
  useEffect(() => {
    value && setTheme(value);
  }, []);

  return [mode, toggleTheme] as DarkModeReturn;
};

export default useDarkMode;
