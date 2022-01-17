import { PaletteMode } from "@mui/material";

export type DarkModeReturn = [
  PaletteMode,
  (value?: PaletteMode) => void
];
