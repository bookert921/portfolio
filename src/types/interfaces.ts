import { PaletteMode } from "@mui/material";
import { ChangeTheme, OpenSide } from "@types";

export interface NavbarProps {
  links: NavLink[];
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

export interface DarkModeState {
  mode: PaletteMode;
  toggleTheme: (mode?: PaletteMode) => void;
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

export interface StorageProps {
  key: string;
  item: any;
  storageObject: Storage;
}
