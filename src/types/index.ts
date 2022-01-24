import { PaletteMode } from "@mui/material";
import { DOMRef } from "./interfaces";

export type ChangeTheme = (value?: PaletteMode) => void;

export type DarkModeReturn = [PaletteMode, ChangeTheme];

export type ToggleReturn = [boolean, OpenSide];

export type SetRef = (node?: any) => void;

export type DOMRefReturn = [DOMRef<any>, SetRef];

export type OpenSide = (specificValue?: boolean) => void;
