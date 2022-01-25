import { DarkModeContext } from "@contexts";
import {
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";

const DarkMode: React.FC = () => {
  const { theme, toggleTheme } =
    useContext(DarkModeContext);
  const muiTheme = useTheme();
  console.log(theme);
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
