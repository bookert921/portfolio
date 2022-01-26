import { StorageReturn } from "@types";
import { useCallback, useEffect, useState } from "react";
import { StorageProps } from "types/interfaces";

// adapted from https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/8-useStorage/useStorage.js

const getStoredValue = ({
  key,
  item,
  storageObject,
}: StorageProps) => {
  // Pulls stored value from local storage if it exists
  // Otherwise uses the default value passed in which is item
  const storedValue = storageObject.getItem(key);
  if (storedValue) return JSON.parse(storedValue);
  if (typeof item === "function") return item();
  return item;
};

const useStorage = ({
  key,
  item,
  storageObject,
}: StorageProps) => {
  const [value, setValue] = useState(
    getStoredValue({ key, item, storageObject })
  );

  useEffect(() => {
    // Used when remove is called or local storage is empty
    if (value === undefined)
      return storageObject.removeItem(key);

    // Sets local storage to receive value passed in each change
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove] as StorageReturn;
};

/**
 * LOCAL STORAGE
 */

export const useLocalStorage = (
  key: string,
  item?: any
) => {
  return useStorage({
    key,
    item,
    storageObject: window.localStorage,
  });
};

/**
 * SESSION STORAGE
 */

export const useSessionStorage = (
  key: string,
  item?: any
) => {
  return useStorage({
    key,
    item,
    storageObject: window.sessionStorage,
  });
};
