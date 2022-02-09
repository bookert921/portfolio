import Form from "@components/Form";
import MessageSent from "@components/Form/MessageSentSnackbar";
import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { textAnimationData } from "@configs";
import AnimatedSVGHeader from "@components/Header/AnimatedSVGHeader";

const ContactSection = styled(Box, {
  name: "ContactSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingBottom: theme.spacing(5),
  flexDirection: "column",
}));

const FormWrapper = styled(Box, {
  name: "FormWrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  marginTop: theme.spacing(5),
}));

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const theme = useTheme();

  return (
    <ContactSection id="contact">
      <AnimatedSVGHeader
        paths={textAnimationData.contact}
        containerFill={theme.palette.primary.main}
        pathFill={theme.palette.secondary.main}
      />
      <FormWrapper>
        <Form setMessageSent={setMessageSent} />
      </FormWrapper>
      <MessageSent messageSent={messageSent} setMessageSent={setMessageSent} />
    </ContactSection>
  );
};

export default Contact;
