import {
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { PaletteMode } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const options = {
  dark: Brightness7,
  light: Brightness4,
};

const DarkModeButton: React.FC<{ mode: PaletteMode }> = ({
  mode,
}) => {
  const theme = useTheme();
  const ModeElement = options[mode];

  return (
    <ModeElement
      color="secondary"
      sx={{ zIndex: theme.zIndex.tooltip }}
    />
  );
};

export default DarkModeButton;
