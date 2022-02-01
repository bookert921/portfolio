import { useState } from "react";
import { ToggleOptions } from "index";

/**
 * Toggles a boolean value by default if no initial/alternate value is given
 */
function useToggle<T>(options?: ToggleOptions<T>) {
  const [value, setValue] = useState<T | boolean>(() => {
    if (options) {
      const { initialValue } = options;
      if (initialValue != undefined) return initialValue;
    }
    return false;
  });

  const toggleValue = (specificValue?: T) => {
    setValue((prevValue: T | boolean) => {
      /**
       *  If we want to return a specific value, we don't care about anything else.
       * Just return the specific value.
       */
      if (specificValue != undefined) return specificValue;

      /**
       * If options are passed we need to consider if just the initial was passed or both
       * If only the initial was passed, it must be a boolean because there is no alternate
       */
      if (options) {
        const { initialValue, alternateValue } = options;
        const initialIsBoolean = typeof initialValue === "boolean";
        if (initialValue && !initialIsBoolean && !alternateValue) {
          throw new Error(
            "An alternate value must be provided to toggle non-boolean values"
          );
        } else if (initialValue && alternateValue) {
          return prevValue === initialValue ? alternateValue : initialValue;
        }
      }

      // If no options or specific passed, just toggle the default boolean
      return !prevValue as boolean;
    });
  };

  return { value, toggleValue };
}

export default useToggle;
