import { IconButton } from "@mui/material";
import { MenuIcon, MenuWrapper } from "./NavMenuElements";

const NavMenu: React.FC<{
  open: boolean;
  toggleNav: (open: boolean) => void;
}> = ({ open, toggleNav }) => {
  const handleClick = () => {
    toggleNav(!open);
  };

  return (
    <IconButton onClick={handleClick}>
      <MenuWrapper>
        <MenuIcon open={open}>
          <div className="clickable-area" />
          <div className="animated-nav" />
        </MenuIcon>
      </MenuWrapper>
    </IconButton>
  );
};

export default NavMenu;
