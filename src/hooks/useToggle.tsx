import { ToggleReturn } from "@types";
import { useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [value, setValue] = useState(initialState);

  const toggleValue = (specificValue?: boolean) => {
    setValue((prevValue: boolean) => {
      return specificValue != undefined &&
        typeof specificValue === "boolean"
        ? specificValue
        : !prevValue;
    });
  };

  return [value, toggleValue] as ToggleReturn;
};

export default useToggle;
