import { Box, Typography } from "@mui/material";

const FeatureCard: React.FC<{
  title: string;
  text: string;
}> = ({ children, title, text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
      <Typography
        variant="body1"
        fontSize="2em"
        color="secondary.main"
      >
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default FeatureCard;
