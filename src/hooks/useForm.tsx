// Modified from https://github.com/fgerschau/react-custom-form-validation-example/blob/master/src/useForm.ts

import { ChangeEvent, FormEvent, useState } from "react";

export interface Validation {
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

export type ErrorRecord<T> = Partial<
  Record<keyof T, string>
>;

export type Validations<T extends {}> = Partial<
  Record<keyof T, Validation>
>;

export const useForm = <
  T extends Record<keyof T, any> = {}
>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>(
    (options?.initialValues || {}) as T
  );
  const [errors, setErrors] = useState<ErrorRecord<T>>({});
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let properName: string = "";

    if (name === "name") {
      if (/\d/.test(value)) return;
      const container: string[] = [];
      value.split(" ").map((v) => {
        container.push(v);
      });

      const upperFirstLetter = container.map((i) => {
        return i.charAt(0).toUpperCase() + i.slice(1);
      });

      properName = upperFirstLetter.join(" ");
    }

    setData({
      ...data,
      [name]: name === "name" ? properName : value,
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (
          pattern?.value &&
          !RegExp(pattern.value).test(value)
        ) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    setData,
    setMessageSent,
    messageSent,
    errors,
  };
};

export default useForm;
