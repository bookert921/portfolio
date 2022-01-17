import { createContext } from "react";

const initialState = {
  navHeight: 0,
  setNavHeight: () => {},
};

export const NavbarContext = createContext<{
  navHeight: number;
  setNavHeight: React.Dispatch<
    React.SetStateAction<number>
  >;
}>(initialState);
