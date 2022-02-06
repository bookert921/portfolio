import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@styles";
import { useDarkMode } from "@hooks";
import { PaletteMode } from "@mui/material";

const initialState: {
  mode: PaletteMode;
  toggleTheme: (specificValue?: PaletteMode | undefined) => void;
} = {
  mode: "light",
  toggleTheme: () => {},
};

export const DarkModeContext = createContext(initialState);

const DarkModeContextProvider: React.FC = ({ children }) => {
  const { mode, toggleTheme } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme(mode as PaletteMode)}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
