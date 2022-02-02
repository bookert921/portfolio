import { Button, TextField, TextFieldProps, useTheme } from "@mui/material";
import { useForm } from "@hooks";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { EmailData, FormState } from "index";
import validation from "./helpers/validation";
import { useEffect, useState } from "react";

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export const FormContent = styled(Box, {
  name: "Form",
})(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  padding: theme.spacing(2),
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  maxWidth: "60%",
  minWidth: "300px",
  width: "100%",
}));

export const Input: React.FC<TextFieldProps> = (props) => {
  const theme = useTheme();
  return (
    <TextField
      variant="filled"
      color="secondary"
      size="small"
      margin="dense"
      sx={{
        ".MuiInputLabel-shrink": {
          color: theme.palette.secondary.main,
        },
      }}
      {...props}
    />
  );
};

const Form: React.FC<{ setMessageSent: (status: boolean) => void }> = ({
  setMessageSent,
}) => {
  const theme = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const {
    data: { name, email, message },
    errors,
    handleChange,
    handleSubmit,
    setData,
  } = useForm<FormState>({
    validations: validation,
    initialValues: initialState,
    onSubmit: () => {
      setSubmitted(true);
    },
  });

  useEffect(() => {
    if (submitted === false) return;
    const sendEmail = async () => {
      const url = "https://api.emailjs.com/api/v1.0/email/send";
      const data: EmailData = {
        service_id: process.env.EMAILJS_SERVICE,
        template_id: process.env.EMAILJS_TEMPLATE,
        user_id: process.env.EMAILJS_ID,
        accessToken: process.env.EMAILJS_TOKEN,
        template_params: {
          name: name,
          message: message,
          email: email,
          subject: message,
        },
      };
      try {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            setData({
              email: "",
              message: "",
              name: "",
            });
            setMessageSent(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    submitted && sendEmail();
  }, [submitted]);

  return (
    <FormContent
      component="form"
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
    </FormContent>
  );
};

export default Form;
