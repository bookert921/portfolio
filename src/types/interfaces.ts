import { PaletteMode } from "@mui/material";
import { ChangeTheme, OpenSide } from "@types";

export interface NavbarProps {
  links: NavLink[];
  theme: PaletteMode;
  toggleTheme: ChangeTheme;
}

export interface NavLink {
  url: string;
  name: string;
}

export interface DOMRef<T extends HTMLElement> {
  [key: string]: T;
}

export interface RefContextProps {
  refs: DOMRef<any>;
  setRef: (node: any) => void;
}

export interface NavMenuProps {
  sideOpen: boolean;
  setSideOpen: OpenSide;
}

export interface DarkModeButtonProps {
  theme?: PaletteMode;
  toggleTheme: ChangeTheme;
}

export interface SidebarProps {
  show: boolean;
  sideOpen: boolean;
  setSideOpen: OpenSide;
  links: NavLink[];
  fixedNav: boolean;
}

export interface FormHandlerState {
  name: string;
  email: string;
  message: string;
}
