/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
// import { act } from "react-dom/test-utils";
import { useDarkMode } from "@hooks";
import TestRenderer from "react-test-renderer";

const { act } = TestRenderer;

describe("useDarkMode", () => {
  describe("sanity check", () => {
    it("is a function", () => {
      expect(typeof useDarkMode).toBe("function");
    });

    it("should return a string and a function", () => {
      const { result } = renderHook(() => useDarkMode());
      expect(typeof result.current.mode).toBe("string");
      expect(typeof result.current.toggleTheme).toBe("function");
    });
  });

  describe("initialization", () => {
    it("should default to light mode", () => {
      const { result } = renderHook(() => useDarkMode());
      expect(result.current.mode).toBe("light");
    });
  });

  describe("toggling", () => {
    it("should toggle mode against last value", () => {
      const { result } = renderHook(() => useDarkMode());
      expect(result.current.mode).toBe("light");

      act(() => result.current.toggleTheme());
      expect(result.current.mode).not.toBe("light");
    });

    it("should have ability to toggle mode to specific value", () => {
      const { result } = renderHook(() => useDarkMode());
      act(() => result.current.toggleTheme("light"));
      expect(result.current.mode).toBe("light");
      act(() => result.current.toggleTheme("dark"));
      expect(result.current.mode).not.toBe("light");
    });
  });
});
