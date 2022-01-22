import { PaletteMode } from "@mui/material";

export interface NavbarProps {
  links: NavLink[];
  open: boolean;
  setOpen: (specificValue?: boolean) => void;
  theme: PaletteMode;
  toggleTheme: (value?: PaletteMode) => void;
  fixed: boolean;
  setRef: (node: any) => void;
}

export interface NavLink {
  url: string;
  name: string;
}

export interface DOMRef<T> {
  [key: string]: T;
}

export interface FixedNavProps {
  navEl: HTMLElement;
  mainEl: HTMLElement;
}
