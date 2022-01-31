import { useState } from "react";

type ToggleValue = boolean | string;

const useToggle = (options?: {
  initialValue?: ToggleValue;
  alternateValue?: ToggleValue;
}) => {
  const [value, setValue] = useState<ToggleValue>(() => {
    if (options) {
      const { initialValue } = options;
      if (typeof initialValue === "string") {
        return initialValue;
      }
      if (typeof initialValue === "boolean") {
        return initialValue;
      }
    }
    return false;
  });

  const toggleValue = (specificValue?: ToggleValue) => {
    setValue((prevValue: ToggleValue) => {
      // If we want to return a specific value, we don't care about anything else.
      // Just return the specific value.
      if (specificValue != undefined) return specificValue;

      if (options) {
        const { initialValue, alternateValue } = options;
        const isBoolean = typeof initialValue !== "boolean";
        if (initialValue && isBoolean && !alternateValue) {
          throw new Error(
            "An alternate value must be provided to toggle non-boolean values"
          );
        } else if (initialValue && alternateValue) {
          return prevValue === initialValue ? alternateValue : initialValue;
        }
      }

      // Otherwise, the default behavior toggles a boolean
      return !prevValue;
    });
  };

  return { value, toggleValue };
};

export default useToggle;

/* 
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

  return { value, toggleValue };
};

export default useToggle;
*/
