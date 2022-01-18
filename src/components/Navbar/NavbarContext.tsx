import { createContext, useState } from "react";

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

const NavbarContextProvider: React.FC = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <NavbarContext.Provider
      value={{ navHeight, setNavHeight }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
