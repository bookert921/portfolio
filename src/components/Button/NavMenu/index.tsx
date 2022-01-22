import { PageContext } from "@contexts";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { MenuIcon, MenuWrapper } from "./NavMenuElements";

const NavMenu: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const { setSideOpen } = useContext(PageContext);
  const theme = useTheme();
  const handleClick = () => {
    setSideOpen(!open);
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
