import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { NavMenuProps } from "types/interfaces";
import { MenuIcon, MenuWrapper } from "./NavMenuElements";

const NavMenu: React.FC<NavMenuProps> = ({
  sideOpen,
  setSideOpen,
}) => {
  const theme = useTheme();
  const handleClick = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        sx={{ zIndex: theme.zIndex.tooltip }}
      >
        <MenuWrapper>
          <MenuIcon open={sideOpen}>
            <div className="clickable-area" />
            <div className="animated-nav" />
          </MenuIcon>
        </MenuWrapper>
      </IconButton>
    </React.Fragment>
  );
};

export default NavMenu;
