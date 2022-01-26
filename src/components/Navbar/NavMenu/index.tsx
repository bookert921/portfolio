import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { NavMenuProps } from "types/interfaces";
import MenuButton from "./MenuButton";

const NavMenu: React.FC<NavMenuProps> = ({
  sideOpen,
  setSideOpen,
}) => {
  const theme = useTheme();
  const handleClick = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{ zIndex: theme.zIndex.tooltip }}
    >
      <MenuButton sideOpen={sideOpen} />
    </IconButton>
  );
};

export default NavMenu;
