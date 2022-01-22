import { PaletteMode } from "@mui/material";

export type DarkModeReturn = [
  PaletteMode,
  (value?: PaletteMode) => void
];

export type ToggleReturn = [
  boolean,
  (specificValue?: boolean) => void
];
