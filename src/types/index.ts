import { PaletteMode } from "@mui/material";
import { ChangeEvent } from "react";
import { DOMRef } from "./interfaces";

export type ChangeTheme = (mode?: PaletteMode) => void;

export type DarkModeReturn = [PaletteMode, ChangeTheme];

export type ToggleReturn = [boolean, OpenSide];

export type SetRef = (node?: any) => void;

export type DOMRefReturn = [DOMRef<any>, SetRef];

export type OpenSide = (specificValue?: boolean) => void;

export type HandleChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type StorageReturn = [
  any,
  React.Dispatch<any>,
  () => void
];
