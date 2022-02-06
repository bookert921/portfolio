import { useCallback, useEffect, useState } from "react";
import { StorageProps } from "@types";

// https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/8-useStorage/useStorage.js

function useStorage<T>({ key, item, storageObject }: StorageProps<T>) {
  const [value, setValue] = useState<T | undefined>(() => {
    // Pulls stored value from local storage if it exists
    // Otherwise uses the default value passed in which is item
    const storedValue = storageObject.getItem(key);
    if (storedValue) return JSON.parse(storedValue);
    if (typeof item === "function") return item();
    return item;
  });

  useEffect(() => {
    // Used when remove is called or local storage is empty
    if (value === undefined) return storageObject.removeItem(key);

    // Sets local storage to receive value passed in each change
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return { value, setValue, remove };
}

/**
 * LOCAL STORAGE
 */

export function useLocalStorage<T>(key: string, item?: T) {
  return useStorage({
    key,
    item,
    storageObject: window.localStorage,
  });
}

/**
 * SESSION STORAGE
 */

export function useSessionStorage<T>(key: string, item?: T) {
  return useStorage({
    key,
    item,
    storageObject: window.sessionStorage,
  });
}
