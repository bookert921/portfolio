import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import About from "../About";
import DesktopLanding from "./Desktop/DesktopLanding";
import { LandingWrapper } from "./LandingElements";
import MobileLanding from "./Mobile/MobileLanding";

const components = {
  desktop: DesktopLanding,
  mobile: MobileLanding,
};

const LandingPage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(
    theme.breakpoints.down("tablet")
  );

  const LandingComponent = mobile
    ? components["mobile"]
    : components["desktop"];

  return (
    <LandingWrapper component="section">
      <LandingComponent />
    </LandingWrapper>
  );
};

export default LandingPage;
