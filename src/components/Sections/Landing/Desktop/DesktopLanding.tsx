import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import {
  DesktopCenterContent,
  DesktopContentWrapper,
  DesktopImageWrapper,
} from "./DesktopLandingElements";

const DesktopLanding = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(
    theme.breakpoints.down("tablet")
  );

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
          color={
            theme.palette.mode === "dark"
              ? "white"
              : "primary.main"
          }
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
