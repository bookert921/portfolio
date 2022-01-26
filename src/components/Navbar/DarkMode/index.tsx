import { DarkModeContext } from "@contexts";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import DarkModeButton from "./DarkModeButton";

const DarkMode: React.FC = () => {
  const { mode, toggleTheme } = useContext(DarkModeContext);

  return (
    <IconButton onClick={() => toggleTheme()}>
      <DarkModeButton mode={mode} />
    </IconButton>
  );
};

export default DarkMode;
