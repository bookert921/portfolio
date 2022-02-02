import { Snackbar, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import React from "react";

const MessageSent: React.FC<{
  messageSent: boolean;
  setMessageSent: (status: boolean) => void;
}> = ({ messageSent, setMessageSent }) => {
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
  );
};

export default MessageSent;
