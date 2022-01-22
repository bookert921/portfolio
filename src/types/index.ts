import { PaletteMode } from "@mui/material";
import { DOMRef } from "./interfaces";

export type DarkModeReturn = [
  PaletteMode,
  (value?: PaletteMode) => void
];

export type ToggleReturn = [
  boolean,
  (specificValue?: boolean) => void
];

export type DOMRefReturn = [
  DOMRef<any>,
  (node?: any) => void
];
