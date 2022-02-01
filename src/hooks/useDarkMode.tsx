import { PaletteMode } from "@mui/material";
import { useEffect } from "react";
import { useLocalStorage } from "./useStorage";
import useToggle from "./useToggle";

const useDarkMode = () => {
  const { value: mode, toggleValue: toggleTheme } = useToggle<PaletteMode>({
    initialValue: "light",
    alternateValue: "dark",
  });

  // Takes initial key and value to set in storage from toggle
  const { value, setValue } = useLocalStorage("theme", mode);

  const updateStorage = (theme: PaletteMode) => {
    setValue(theme);
  };

  // Use to listen for each update of mode
  useEffect(() => {
    updateStorage(mode);
  }, [mode]);

  // Pulls value from local storage when user accesses site
  useEffect(() => {
    value && toggleTheme(value);
  }, []);

  return { mode, toggleTheme };
};

export default useDarkMode;
