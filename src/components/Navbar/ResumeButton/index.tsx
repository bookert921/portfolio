import { Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledLink = styled("a")`
  text-decoration: unset;
  color: unset;
`;

const ResumeButton: React.FC<{ url: string }> = ({ url }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        [theme.breakpoints.down("tablet")]: {
          marginTop: "20px",
        },
      }}
    >
      <StyledLink href={url} target="_blank" rel="noreferrer noopener">
        <Typography variant="caption" fontWeight="bold">
          Resume
        </Typography>
      </StyledLink>
    </Button>
  );
};

export default ResumeButton;
