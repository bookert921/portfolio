import { Box, IconButton } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import { siteData } from "@configs";

const StyledLink = styled("a")`
  text-decoration: unset;
  color: unset;
`;

const SocialMedia = () => {
  const { socialMedia } = siteData;
  const theme = useTheme();
  const styles = {
    color: theme.palette.secondary.main,
    fontSize: "1.25em",
  };

  const renderSocial = socialMedia.map(({ url, name, icon }) => {
    const Icon = icon;
    return (
      <IconButton key={name}>
        <StyledLink
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon sx={styles} />
        </StyledLink>
      </IconButton>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {renderSocial}
    </Box>
  );
};

export default SocialMedia;
