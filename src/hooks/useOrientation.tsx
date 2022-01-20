import {
  useReducer,
  useEffect,
  Reducer,
  useCallback,
} from "react";

interface OrientationState {
  landscape: boolean;
  portrait: boolean;
}

interface OrientationAction {
  type: "LANDSCAPE" | "PORTRAIT";
}

const INITIAL_STATE: OrientationState = {
  landscape: false,
  portrait: true,
};

const orientationReducer: Reducer<
  OrientationState,
  OrientationAction
> = (state, { type }) => {
  switch (type) {
    case "LANDSCAPE":
      return {
        ...state,
        landscape: true,
        portrait: false,
      };
    case "PORTRAIT":
      return {
        ...state,
        landscape: false,
        portrait: true,
      };
    default:
      return state;
  }
};

const useOrientation = () => {
  const [orientation, orientationDispatch] = useReducer(
    orientationReducer,
    INITIAL_STATE
  );

  const updateOrientation = useCallback(() => {
    if (screen.orientation.type.includes("portrait")) {
      orientationDispatch({ type: "PORTRAIT" });
    } else if (
      screen.orientation.type.includes("landscape")
    ) {
      orientationDispatch({ type: "LANDSCAPE" });
    }
  }, [orientation]);

  useEffect(() => {
    screen.orientation.addEventListener(
      "change",
      updateOrientation
    );
    return () =>
      screen.orientation.removeEventListener(
        "change",
        updateOrientation
      );
  }, [orientation]);

  return orientation;
};

export default useOrientation;
