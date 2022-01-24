import {
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DarkModeButtonProps } from "types/interfaces";

const DarkMode: React.FC<DarkModeButtonProps> = ({
  theme,
  toggleTheme,
}) => {
  const muiTheme = useTheme();
  const themeButton =
    theme === "light" ? (
      <Brightness4
        color="secondary"
        sx={{ zIndex: muiTheme.zIndex.tooltip }}
      />
    ) : (
      <Brightness7
        color="secondary"
        sx={{ zIndex: muiTheme.zIndex.tooltip }}
      />
    );
  return (
    <IconButton onClick={() => toggleTheme()}>
      {themeButton}
    </IconButton>
  );
};

export default DarkMode;
