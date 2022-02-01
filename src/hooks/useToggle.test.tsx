import { renderHook } from "@testing-library/react-hooks";
import useToggle from "./useToggle";
// import { act } from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";

const { act } = TestRenderer;

describe("useToggle", () => {
  describe("sanity check", () => {
    it("should be a function", () => {
      expect(typeof useToggle).toBe("function");
    });

    it("should return a boolean and a function", () => {
      const { result } = renderHook(() => useToggle());
      expect(typeof result.current.value).toBe("boolean");
      expect(typeof result.current.toggleValue).toBe("function");
    });
  });

  describe("initialization", () => {
    it("should start with false by default", () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current.value).toBe(false);
    });

    it("should use initialState argument as default if given", () => {
      const { result } = renderHook(() => useToggle({ initialValue: true }));
      expect(result.current.value).not.toBe(false);
    });
  });

  /* Reset to default before each */
  beforeEach(() => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.toggleValue(false));
  });

  describe("toggling", () => {
    it("should toggle to opposite value if not argument passed to toggle function", () => {
      const { result } = renderHook(() => useToggle());
      act(() => result.current.toggleValue());
      expect(result.current.value).not.toBe(false);
    });

    it("should toggle to specific value passed to toggle function", () => {
      const { result } = renderHook(() => useToggle());
      act(() => result.current.toggleValue("Ice Cream"));
      expect(result.current.value).toBe("Ice Cream");
    });

    it("should toggle between values passed as options", () => {
      const { result } = renderHook(() =>
        useToggle({
          initialValue: "light",
          alternateValue: "dark",
        })
      );
      expect(result.current.value).toBe("light");
      act(() => result.current.toggleValue());
      expect(result.current.value).not.toBe("light");
    });
  });

  describe("error handling", () => {
    it("should throw an error if initialValue is a string, but not alternate value was passed to toggle", () => {
      const { result } = renderHook(() => useToggle({ initialValue: "Go" }));
      expect(result.current.value).toBe("Go");
      act(() => result.current.toggleValue());
      expect(result.error?.message).toBe(
        "An alternate value must be provided to toggle non-boolean values"
      );
    });
  });
});
