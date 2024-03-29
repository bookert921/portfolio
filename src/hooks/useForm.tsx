import { ChangeEvent, FormEvent, useState } from "react";
import { ErrorRecord, FormOptions } from "@types";

// https://github.com/fgerschau/react-custom-form-validation-example/blob/master/src/useForm.ts
/**
 * Usage:
 * const {data, handleChange, handleSubmit, errors, ...otherValues} = useForm({
 *  // Takes form name/id as key and associates a Validation object
 *  validation: {
 *    name: Validation,
 *    email: Validation
 *  },
 *  initialValues: {
 *    name: string
 *  },
 *  onSubmit: () => {},
 * })
 *
 */

const useForm = <T extends Record<keyof T, any> = {}>(
  options?: FormOptions<T>
) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    let properName: string = "";

    if (name === "name") {
      if (/\d/.test(value)) return;
      const container: string[] = [];
      value.split(" ").map((v) => {
        container.push(v);
      });

      const upperFirstlabel = container.map((i) => {
        return i.charAt(0).toUpperCase() + i.slice(1);
      });

      properName = upperFirstlabel.join(" ");
    }

    setData({
      ...data,
      [name]: name === "name" ? properName : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
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
      return options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    setData,
    errors,
  };
};

export default useForm;
