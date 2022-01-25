import { SidebarWrapper } from "./SidebarElements";
import NavLinks from "../NavLink/NavLinks";

import { SidebarProps } from "types/interfaces";

const Sidebar: React.FC<SidebarProps> = ({
  show,
  sideOpen,
  setSideOpen,
  links,
  fixedNav,
}) => {
  const sideLinks = show ? (
    <NavLinks onClickCloseSide={() => setSideOpen(false)}>
      {links}
    </NavLinks>
  ) : null;

  return (
    <SidebarWrapper fixedNav={fixedNav} sideOpen={sideOpen}>
      {sideLinks}
    </SidebarWrapper>
  );
};

export default Sidebar;
