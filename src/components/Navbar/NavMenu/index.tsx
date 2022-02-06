import { IconButton } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { NavMenuProps } from "@types";

const MenuWrapper = styled("div")`
  width: 1.5rem;
  height: 1.5rem;
`;

const MenuIcon = styled("div")<{
  open: boolean;
}>(
  ({ theme, open }) => `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1.5rem;
  background-color: transparent;
  color: inherit;
  text-transform: none;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;

  .clickable-area {
    position: relative;
    
  }

  .animated-nav {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.25rem;
    height: .15rem;
    transition-duration: 0.25s;
    background-color: ${theme.palette.secondary.main};
    transition-property: transform;
    color: inherit;
    text-transform: none;
    transition-delay: ${open ? "0.11s" : "0s"};
    transform: translate(-50%, -50%) ${
      open ? "rotate(225deg)" : "rotate(0deg)"
    };
    transition-timing-function: ease-in;

    ::before,
    ::after {
      content: "";
      position: absolute;
      width: 1.25rem;
      height: 0.15rem;
      right: 0;
      background-color: ${theme.palette.secondary.main};
      left: 50%;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition-duration: 0.25s;
      transition-property: transform;
      transition-delay: ${open ? "0.11s" : "0s"};
      transition-timing-function: ease-in;
    }

    ::before {
      top: ${open ? "0" : "-5px"};
      opacity: ${open ? 0 : 1};
      transform: translateX(-50%);
      transition: ${
        open
          ? "top 0.1s ease-out, opacity 0.1s ease-out 0.12s"
          : "top 0.1s ease-in 0.25s, opacity 0.1s ease-in"
      };
    }

    ::after {
      bottom: ${open ? "0" : "-5px"};
      transform: translateX(-50%) rotate(${open ? "-90deg" : "0"});
      transition: ${
        open
          ? "bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s"
          : "bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      };
    }
`
);

const MenuButton: React.FC<{ sideOpen: boolean }> = ({ sideOpen }) => {
  return (
    <MenuWrapper>
      <MenuIcon open={sideOpen}>
        <div className="clickable-area" />
        <div className="animated-nav" />
      </MenuIcon>
    </MenuWrapper>
  );
};

const NavMenu: React.FC<NavMenuProps> = ({ sideOpen, setSideOpen }) => {
  const theme = useTheme();
  const handleClick = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <IconButton onClick={handleClick} sx={{ zIndex: theme.zIndex.tooltip }}>
      <MenuButton sideOpen={sideOpen} />
    </IconButton>
  );
};

export default NavMenu;
