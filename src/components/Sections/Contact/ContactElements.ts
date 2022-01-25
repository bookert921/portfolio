import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContactSection = styled(Box, {
  name: "ContactSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingBottom: theme.spacing(5),
  flexDirection: "column",
}));

export const FormWrapper = styled(Box, {
  name: "FormWrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  marginTop: theme.spacing(5),
}));

export const Form = styled(Box, {
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
