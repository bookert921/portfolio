import { ErrorRecord, FormOptions } from "index";
import { ChangeEvent, FormEvent, useState } from "react";

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

    if (options?.onSubmit) {
      options.onSubmit();
      setErrors({});
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
