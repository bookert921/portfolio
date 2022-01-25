import {
  TextField,
  Button,
  useTheme,
  TextFieldProps,
} from "@mui/material";
import {
  ContactSection,
  Form,
  FormWrapper,
} from "./ContactElements";
import { FormHandlerState } from "types/interfaces";
import { HandleChangeEvent } from "@types";
import { useState } from "react";
import ContactText from "./ContactText";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Input: React.FC<TextFieldProps> = (props) => {
  const theme = useTheme();
  return (
    <TextField
      {...props}
      variant="filled"
      color="secondary"
      size="small"
      margin="dense"
      sx={{
        ".MuiInputLabel-shrink": {
          color: theme.palette.secondary.main,
        },
      }}
    />
  );
};

const Contact = () => {
  const [{ name, email, message }, setState] =
    useState<FormHandlerState>(initialState);

  const handleChange = (e: HandleChangeEvent) => {
    e.preventDefault();
    if (e.target != undefined) {
      setState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  return (
    <ContactSection id="contact">
      <ContactText />
      <FormWrapper>
        <Form component="form">
          <Input
            label="Name"
            placeholder="Who's reaching out?"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            placeholder="How do I respond?"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            label="Message"
            placeholder="What would you like to say?"
            multiline
            name="message"
            rows={6}
            value={message}
            onChange={handleChange}
          />
          <Button variant="contained">Submit</Button>
        </Form>
      </FormWrapper>
    </ContactSection>
  );
};

export default Contact;
