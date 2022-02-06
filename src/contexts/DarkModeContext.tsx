import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@styles";
import { useDarkMode } from "@hooks";
import { DarkModeContextProps } from "@types";

const initialState: DarkModeContextProps = {
  mode: "light",
  toggleTheme: () => {},
};

export const DarkModeContext =
  createContext<DarkModeContextProps>(initialState);

const DarkModeContextProvider: React.FC = ({ children }) => {
  const { mode, toggleTheme } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme(mode)}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
