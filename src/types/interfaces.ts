import { PaletteMode } from "@mui/material";
import React from "react";

export interface NavbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: PaletteMode;
  toggleTheme: (value?: PaletteMode) => void;
}

export interface NavLink {
  url: string;
  name: string;
}
