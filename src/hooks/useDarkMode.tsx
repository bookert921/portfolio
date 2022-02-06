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
  const { value, setValue } = useLocalStorage<PaletteMode>(
    "theme",
    mode as PaletteMode
  );

  const updateStorage = (theme: PaletteMode) => {
    setValue(theme);
  };

  // Used to listen for each update of mode
  useEffect(() => {
    updateStorage(mode as PaletteMode);
  }, [mode]);

  // Pulls value from local storage when user accesses site
  useEffect(() => {
    value != undefined && toggleTheme(value);
  }, []);

  return { mode, toggleTheme } as {
    mode: PaletteMode;
    toggleTheme: (specificValue?: PaletteMode | undefined) => void;
  };
};

export default useDarkMode;
