import { ChangeEvent } from "react";
import { useForm } from "@hooks";
import { renderHook } from "@testing-library/react-hooks";
// import { act } from "react-dom/test-utils";
import TestRenderer from "react-test-renderer";

const { act } = TestRenderer;
interface TestData {
  name: string;
  bool: boolean;
  num: number;
}

const onSubmit = jest.fn();
jest.mock("@emailjs/browser");
// Creates a fake change event that takes in values to be passed as "target"
// The function returns a preventDefault mock, and the target
const getFakeTestEvent = (name: any = "", value: any = "") =>
  ({
    preventDefault: jest.fn(),
    target: { name, value },
  } as unknown as ChangeEvent<any>);

describe("useForm", () => {
  describe("sanity check", () => {
    it("should be a function", () => {
      expect(typeof useForm).toBe("function");
    });
    it("should return a 4 update function, 2 objects, and a boolean", () => {
      const { result } = renderHook(() => useForm());

      expect(result.current.messageSent).toBe(false);
      expect(typeof result.current.errors).toBe("object");
      expect(typeof result.current.data).toBe("object");
      expect(typeof result.current.handleChange).toBe("function");
      expect(typeof result.current.handleSubmit).toBe("function");
      expect(typeof result.current.setData).toBe("function");
      expect(typeof result.current.setMessageSent).toBe("function");
    });
  });

  describe("initialization", () => {
    it("should initialize data", () => {
      const { result } = renderHook(() =>
        useForm<TestData>({
          initialValues: {
            name: "John",
          },
        })
      );

      expect(result.current.data.name).toBe("John");
      expect(result.current.data.bool).toBeUndefined();
      expect(result.current.data.num).toBeUndefined();
    });
  });

  beforeEach(() => {
    onSubmit.mockReset();
  });

  describe("data can be updated", () => {
    it("should update the data", () => {
      const { result } = renderHook(() => useForm<TestData>());
      // Because there is no initial data being passed it should be undefined
      expect(result.current.data.name).toBeUndefined();
      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "test"));
      });

      // Name get's transformed to uppercase and therefore Test is expected from test
      expect(result.current.data.name).toBe("Test");
      expect(result.current.data.bool).toBeUndefined();
      expect(result.current.data.num).toBeUndefined();
    });
  });

  describe("validation", () => {
    it("should call the onSubmit callback when there are no errors", () => {
      const { result } = renderHook(() =>
        useForm<TestData>({
          onSubmit,
        })
      );
      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it("should validate required values", () => {
      const requiredMessage = "This field is required";
      const { result } = renderHook(() =>
        useForm<TestData>({
          validations: {
            name: {
              required: {
                value: true,
                message: requiredMessage,
              },
            },
          },
          onSubmit,
        })
      );

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(0);
      expect(result.current.errors.name).toBe(requiredMessage);
    });

    it("should validate patterns", () => {
      const validationMessage = "This field isn't formatted correctly.";

      const { result } = renderHook(() =>
        useForm<TestData>({
          validations: {
            name: {
              pattern: {
                value: "/[A-Za-z]*/",
                message: validationMessage,
              },
            },
          },
          onSubmit,
        })
      );

      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "Felix123"));
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(0);
      expect(result.current.errors.name).toBe(validationMessage);
    });

    it("should validate custom validations", () => {
      const validationMessage = "The minimum length is 7 characters.";
      const { result } = renderHook(() =>
        useForm<TestData>({
          validations: {
            name: {
              custom: {
                isValid: (value) => value?.length > 6,
                message: validationMessage,
              },
            },
          },
          onSubmit,
        })
      );

      // Name is long enough
      act(() => {
        result.current.handleChange(
          getFakeTestEvent("name", "Michael Jackson")
        );
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(result.current.errors.name).toBeUndefined();

      // Name is too short
      onSubmit.mockReset();
      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "rob"));
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(0);
      expect(result.current.errors.name).toBe(validationMessage);
    });

    it("should validate multiple validations", () => {
      const validationMessage = "This field isn't formatted correctly.";
      const { result } = renderHook(() =>
        useForm<TestData>({
          validations: {
            name: {
              pattern: {
                value: "/[A-Za-z]*/",
                message: validationMessage,
              },
              custom: {
                isValid: (value) => value?.length > 6,
                message: validationMessage,
              },
            },
          },
          onSubmit,
        })
      );

      // Name is too short and contains numbers
      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "123"));
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(0);
    });

    it("should reset errors on submit", () => {
      const validationMessage = "The minimum length is 7 characters.";
      const { result } = renderHook(() =>
        useForm<TestData>({
          validations: {
            name: {
              custom: {
                isValid: (value) => value?.length > 6,
                message: validationMessage,
              },
            },
          },
          onSubmit,
        })
      );

      // Name is too short
      onSubmit.mockReset();
      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "123"));
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(0);
      expect(result.current.errors.name).toBe(validationMessage);

      // Name is long enough
      act(() => {
        result.current.handleChange(getFakeTestEvent("name", "Felix Fex"));
      });

      act(() => {
        result.current.handleSubmit(getFakeTestEvent());
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(result.current.errors.name).toBeUndefined();
    });
  });

  describe("success", () => {
    it("should alert user of success", async () => {
      const { result } = renderHook(() =>
        useForm({
          validations: {
            name: {
              pattern: {
                value: "^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z]+|[a-z]+)*)$",
                message:
                  "A name can include up to 40 uppercase or lowercase character and special characters common to names.",
              },
              required: {
                value: true,
                message: "Name is required to submit form.",
              },
            },
          },
          onSubmit: () => {
            act(() => result.current.setMessageSent(true));
          },
        })
      );
      act(() =>
        result.current.handleChange(getFakeTestEvent("name", "Booker T"))
      );
      await act(() => result.current.handleSubmit(getFakeTestEvent()));
      expect(result.current.messageSent).toBeTruthy();
    });
  });
});
