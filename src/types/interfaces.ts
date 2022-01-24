import { PaletteMode } from "@mui/material";

export interface NavbarProps {
  links: NavLink[];
  theme: PaletteMode;
  toggleTheme: (value?: PaletteMode) => void;
}

export interface NavLink {
  url: string;
  name: string;
}

export interface DOMRef<T> {
  [key: string]: T;
}

export interface FixedNavProps {
  landingEl: HTMLElement;
  navbarEl: HTMLElement;
}

export interface PageContextProps {
  sideOpen: boolean;
  setSideOpen: (specificValue?: boolean) => void;
  fixedNav: boolean;
  DOMRef: DOMRef<unknown>;
  setRef: (node: any) => void;
}
