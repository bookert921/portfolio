import SocialMedia from "@components/SocialMedia";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar, {
  name: "Footer",
})(({ theme }) => ({
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  width: "100%",
}));

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <AppBar
      position="static"
      sx={{
        height: "104px",
        width: "100%",
      }}
    >
      <StyledToolbar>
        <SocialMedia />

        <Typography variant="subtitle1" color="secondary.main">
          &copy; {year} Booker T. Showers III
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Footer;
