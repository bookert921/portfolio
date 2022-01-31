import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobileS: true;
    mobile: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    FourK: true;
  }
}

type ToggleValue = boolean | string;

// type ToggleOptions<T> = {
//   initialValue?: ToggleValue | T;
//   alternateValue?: ToggleValue | T;
// };

// interface ToggleReturn<T> {
//   value: ToggleValue | T;
//   toggleValue: (specificValue?: ToggleValue | T | undefined) => void;
// }
interface ToggleReturn<T> {
  value: T;
  toggleValue: (specificValue?: T | undefined) => void;
}

interface DarkModeReturn {
  mode: PaletteMode;
  toggleTheme: (specificValue?: PaletteMode | undefined) => void;
}
