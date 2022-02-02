import { FormState, Validations } from "index";

const validation: Validations<FormState> = {
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
  email: {
    pattern: {
      value:
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
      message: "Please enter a valid email address.",
    },
    required: {
      value: true,
      message: "Email is required to submit form.",
    },
  },
};

export default validation;
