import { useDOMRef, useFixed, useToggle } from "@hooks";
import {
  FixedNavProps,
  PageContextProps,
} from "types/interfaces";
import React, { createContext } from "react";

const initialContext: PageContextProps = {
  sideOpen: false,
  fixed: false,
  setRef: () => {},
  setSideOpen: () => {},
};

export const PageContext =
  createContext<PageContextProps>(initialContext);

const PageContextProvider: React.FC = ({ children }) => {
  const [sideOpen, setSideOpen] = useToggle();
  const [DOMRef, setRef] = useDOMRef();
  const fixed = useFixed(DOMRef as FixedNavProps);

  return (
    <PageContext.Provider
      value={{
        sideOpen,
        setRef,
        setSideOpen,
        fixed,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
