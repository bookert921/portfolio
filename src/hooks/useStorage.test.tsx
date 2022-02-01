/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import { useLocalStorage } from "@hooks";
// import { act } from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";

const { act } = TestRenderer;

describe("useLocalStorage", () => {
  describe("sanity check", () => {
    it("should be a function", () => {
      expect(typeof useLocalStorage).toBe("function");
    });

    it("should return a value and two function", () => {
      const { result } = renderHook(() => useLocalStorage("theme"));
      expect(result.current.value).toBeUndefined(); // Value initialized as undefined
      expect(typeof result.current.setValue).toBe("function");
      expect(typeof result.current.remove).toBe("function");
    });
  });

  /* Reset to default before each */
  beforeEach(() => {
    const { result } = renderHook(() => useLocalStorage("theme"));
    act(() => result.current.remove());
    expect(result.current.value).toBeUndefined();
  });

  describe("updating storage", () => {
    it("should add item to storage", () => {
      const { result } = renderHook(() => useLocalStorage("theme", "test"));
      expect(result.current.value).toBe("test");
    });

    it("should update item in storage", () => {
      const { result } = renderHook(() => useLocalStorage("theme", "test"));
      expect(result.current.value).toBe("test");

      act(() => result.current.setValue("dark"));
      expect(result.current.value).not.toBe("test");
    });

    it("should remove value from storage and set as undefined", () => {
      const { result } = renderHook(() => useLocalStorage("theme", "test"));
      expect(result.current.value).toBe("test");
      act(() => result.current.remove());
      expect(result.current.value).toBeUndefined();
    });
  });
});
