import { MenuIcon, MenuWrapper } from "./NavMenuElements";

const MenuButton: React.FC<{ sideOpen: boolean }> = ({
  sideOpen,
}) => {
  return (
    <MenuWrapper>
      <MenuIcon open={sideOpen}>
        <div className="clickable-area" />
        <div className="animated-nav" />
      </MenuIcon>
    </MenuWrapper>
  );
};

export default MenuButton;
