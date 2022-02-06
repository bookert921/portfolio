import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";

const DesktopContentWrapper = styled(Box, {
  name: "ContentFlexWrapper",
})(() => ({
  height: "100%",
  width: "90%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const DesktopCenterContent = styled(Box, {
  name: "ContentWrapper",
})(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  [theme.breakpoints.down("laptop")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

const DesktopImageWrapper = styled(Box, {
  name: "ImageWrapper",
})(() => ({
  minHeight: "200px",
  minWidth: "200px",
  maxHeight: "250px",
  maxWidth: "250px",
}));

const DesktopLanding = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <DesktopContentWrapper>
      <DesktopCenterContent>
        <DesktopImageWrapper>
          <StaticImage
            alt="profile view of self"
            src="../../../../assets/images/self.png"
            layout="constrained"
            placeholder="blurred"
          />
        </DesktopImageWrapper>
        <Typography
          variant={mobile ? "h4" : "h5"}
          color={theme.palette.mode === "dark" ? "white" : "primary.main"}
          fontWeight="bold"
          gridArea={"text"}
        >
          Let's{" "}
          <Box
            component="span"
            sx={{
              color: theme.palette.secondary.main,
            }}
          >
            Build
          </Box>{" "}
          Your Dream App
        </Typography>
      </DesktopCenterContent>
    </DesktopContentWrapper>
  );
};

export default DesktopLanding;
