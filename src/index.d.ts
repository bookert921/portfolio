import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobileS: true;
    mobile: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    laptopL: true;
    FourK: true;
  }
}

type ToggleValue<T> = T | boolean;

type ToggleOptions<T> = {
  initialValue?: T;
  alternateValue?: T;
};

interface StorageProps<T> {
  key: string;
  item: T;
  storageObject: Storage;
}

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

// Partial used to make all properties optional for more flexible usage
type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

interface FormOptions<T> {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}
