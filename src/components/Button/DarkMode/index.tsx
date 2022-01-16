import {
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton, PaletteMode } from "@mui/material";

const DarkMode: React.FC<{
  theme?: PaletteMode;
  toggleTheme: (value?: PaletteMode) => void;
}> = ({ theme, toggleTheme }) => {
  const themeButton =
    theme === "light" ? (
      <Brightness4 color="secondary" />
    ) : (
      <Brightness7 color="secondary" />
    );
  return (
    <IconButton onClick={() => toggleTheme()}>
      {themeButton}
    </IconButton>
  );
};

export default DarkMode;
