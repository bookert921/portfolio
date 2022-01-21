import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { MenuIcon, MenuWrapper } from "./NavMenuElements";

const NavMenu: React.FC<{
  open: boolean;
  toggleNav: (open: boolean) => void;
}> = ({ open, toggleNav }) => {
  const theme = useTheme();
  const handleClick = () => {
    toggleNav(!open);
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={handleClick}
        sx={{ zIndex: theme.zIndex.tooltip }}
      >
        <MenuWrapper>
          <MenuIcon open={open}>
            <div className="clickable-area" />
            <div className="animated-nav" />
          </MenuIcon>
        </MenuWrapper>
      </IconButton>
    </React.Fragment>
  );
};

export default NavMenu;
