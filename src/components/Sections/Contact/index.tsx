import React from "react";
import { Button, useTheme, Snackbar, IconButton } from "@mui/material";
import { ContactSection, FormWrapper, Input } from "./ContactElements";
import ContactText from "./ContactText";
import { useForm } from "@hooks";
import { Close as CloseIcon } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { FormState, Validations } from "index";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

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

const Contact = () => {
  const theme = useTheme();

  const {
    data: { name, email, message },
    errors,
    handleChange,
    handleSubmit,
    messageSent,
    setData,
    setMessageSent,
  } = useForm<FormState>({
    validations: validation,
    initialValues: initialState,
    onSubmit: async () => {
      const data = {
        name: name,
        message: message,
        email: email,
        subject: message,
      };
      try {
        emailjs.init(process.env.EMAILJS_ID as string);
        const response = await emailjs.send(
          process.env.EMAILJS_SERVICE as string,
          process.env.EMAILJS_TEMPLATE as string,
          data
        );
        setData({
          email: "",
          message: "",
          name: "",
        });
        !!response && setMessageSent(true);
      } catch (error) {
        let errMsg = "";
        if (error instanceof Error) {
          errMsg = error.message;
        }
        return {
          message: "There was an error",
          error: errMsg,
        };
      }
    },
  });

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setMessageSent(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
          onSubmit={handleSubmit}
        >
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            helperText={errors.name}
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
      <Snackbar
        sx={{
          ".MuiPaper-root": {
            minWidth: "100px",
            backgroundColor: "secondary.main",
            color: "primary.contrastText",
          },
        }}
        open={messageSent}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Thank for your for message"
        action={action}
      />
    </ContactSection>
  );
};

export default Contact;
