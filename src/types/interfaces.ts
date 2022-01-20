import { PaletteMode } from "@mui/material";
import React from "react";

export interface NavbarProps {
  links: NavLink[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
