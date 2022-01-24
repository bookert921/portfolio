import { useDOMRef } from "@hooks";
import { RefContextProps } from "types/interfaces";
import React, { createContext } from "react";

const initialContext: RefContextProps = {
  setRef: () => {},
  refs: {},
};

export const RefContext =
  createContext<RefContextProps>(initialContext);

const RefContextProvider: React.FC = ({ children }) => {
  const [refs, setRef] = useDOMRef();

  return (
    <RefContext.Provider
      value={{
        refs,
        setRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
