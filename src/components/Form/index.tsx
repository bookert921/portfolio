import { Button, TextField, TextFieldProps, useTheme } from "@mui/material";
import { useForm } from "@hooks";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FormState } from "index";
import validation from "./helpers/validation";

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

  const { data, errors, handleChange, handleSubmit, setData } =
    useForm<FormState>({
      validations: validation,
      initialValues: initialState,
      onSubmit: async () => {
        try {
          if (typeof window !== "undefined") {
            await window
              .fetch(`https://formspree.io/f/mgedaypw`, {
                method: `POST`,
                body: JSON.stringify(data),
                headers: {
                  Accept: "application/json",
                },
              })
              .then((res) => {
                setData({
                  email: "",
                  message: "",
                  name: "",
                });
                console.log(res.body);
                if (res.status === 200) {
                  setMessageSent(true);
                }
              });
          }
        } catch (error) {
          console.log(error);
        }
      },
    });

  const { email, message, name } = data;
  return (
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
      action=""
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
  );
};

export default Form;
