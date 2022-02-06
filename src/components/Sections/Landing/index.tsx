import { RefContext } from "@contexts";
import { useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import DesktopLanding from "./Desktop";
import MobileLanding from "./Mobile";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LandingWrapper = styled(Box, {
  name: "LandingWrapper",
})(() => ({
  height: "100vh",
  width: "100%",
  flexGrow: 1,
  paddingTop: "2em",
  ["@media (orientation: landscape)"]: {
    paddingTop: "1em",
  },
}));

const components = {
  desktop: DesktopLanding,
  mobile: MobileLanding,
};

const LandingPage: React.FC = () => {
  const { setRef } = useContext(RefContext);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"));

  const LandingComponent = mobile
    ? components["mobile"]
    : components["desktop"];

  return (
    <LandingWrapper
      id="landing"
      component="section"
      ref={setRef}
      data-refkey="landingEl"
    >
      <LandingComponent />
    </LandingWrapper>
  );
};

export default LandingPage;
