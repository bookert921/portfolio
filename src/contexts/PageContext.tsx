import { useDOMRef, useFixed, useToggle } from "@hooks";
import {
  FixedNavProps,
  PageContextProps,
} from "types/interfaces";
import React, { createContext } from "react";

const initialContext: PageContextProps = {
  sideOpen: false,
  fixedNav: false,
  setRef: () => {},
  setSideOpen: () => {},
  DOMRef: null,
};

export const PageContext =
  createContext<PageContextProps>(initialContext);

const PageContextProvider: React.FC = ({ children }) => {
  const [sideOpen, setSideOpen] = useToggle();
  const [DOMRef, setRef] = useDOMRef();
  const fixedNav = useFixed(DOMRef as FixedNavProps);

  return (
    <PageContext.Provider
      value={{
        DOMRef,
        setRef,
        sideOpen,
        setSideOpen,
        fixedNav,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
