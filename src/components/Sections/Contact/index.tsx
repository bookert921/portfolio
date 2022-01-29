import { Button, useTheme } from "@mui/material";
import {
  ContactSection,
  FormWrapper,
  Input,
} from "./ContactElements";
import emailjs, { init } from "@emailjs/browser";
init(process.env.EMAILJS_ID as string);
import ContactText from "./ContactText";
import { useForm } from "@hooks";
import React from "react";
import { Validations } from "hooks/useForm";
import {} from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const validation: Validations<FormState> = {
  name: {
    pattern: {
      value:
        "^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z]+|[a-z]+)*)$",
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

const Contact = () => {
  const theme = useTheme();

  const {
    data: { name, email, message },
    errors,
    handleChange,
    handleSubmit,
  } = useForm<FormState>({
    validations: validation,
    initialValues: initialState,
    onSubmit: async () => {
      const messageFromViewer = {
        email: email,
        name: name,
        message: message,
        subject: message.slice(0, 10),
      };
      try {
        await emailjs.send(
          process.env.EMAILJS_SERVICE as string,
          process.env.EMAILJS_TEMPLATE as string,
          messageFromViewer
        );
      } catch (error) {
        let errMsg = "";
        if (error instanceof Error) {
          errMsg = error.message;
        }
        console.log(errMsg);
      }
    },
  });

  return (
    <ContactSection id="contact">
      <ContactText />
      <FormWrapper>
        <form
          style={{
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            padding: theme.spacing(2),
            flexDirection: "column",
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[5],
            maxWidth: "60%",
            minWidth: "300px",
            width: "100%",
          }}
          method="POST"
          action="/api/email"
          onSubmit={handleSubmit}
        >
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            helperText={errors.name ? errors.name : ""}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            helperText={errors.email}
            onChange={handleChange}
          />
          <Input
            label="Message"
            type="text"
            multiline
            name="message"
            rows={6}
            helperText={errors.message}
            value={message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </FormWrapper>
    </ContactSection>
  );
};

export default Contact;
