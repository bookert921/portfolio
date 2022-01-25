import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GitHub, LinkedIn } from "@mui/icons-material";

const SocialMedia = () => {
  const theme = useTheme();
  const styles = {
    color: theme.palette.secondary.main,
    fontSize: "1.25em",
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton>
        <a
          style={{
            textDecoration: "unset",
            color: "unset",
          }}
          href="https://github.com/bookert921"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={styles} />
        </a>
      </IconButton>
      <IconButton>
        <a
          style={{
            textDecoration: "unset",
            color: "unset",
          }}
          href="https://linkedin.com/in/bookert921"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn sx={styles} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
