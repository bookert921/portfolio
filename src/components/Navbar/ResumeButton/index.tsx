import { Button, Typography } from "@mui/material";

const ResumeButton: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Button variant="contained">
      <a
        style={{
          textDecoration: "unset",
          color: "inherit",
        }}
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Typography variant="caption" fontWeight="bold">
          Resume
        </Typography>
      </a>
    </Button>
  );
};

export default ResumeButton;
