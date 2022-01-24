import { PageContext } from "@contexts";
import { useDOMRef } from "@hooks";
import { useMediaQuery, useTheme } from "@mui/material";
import { useContext } from "react";
import Section from "..";
// import About from "../About";
import DesktopLanding from "./Desktop/DesktopLanding";
import { LandingWrapper } from "./LandingElements";
import MobileLanding from "./Mobile/MobileLanding";

const components = {
  desktop: DesktopLanding,
  mobile: MobileLanding,
};

const LandingPage: React.FC = () => {
  const { DOMRef, setRef } = useContext(PageContext);
  const theme = useTheme();
  const mobile = useMediaQuery(
    theme.breakpoints.down("tablet")
  );

  const [refs] = useDOMRef();

  console.log(refs);
  console.log(DOMRef);

  const LandingComponent = mobile
    ? components["mobile"]
    : components["desktop"];

  return (
    <LandingWrapper
      component="section"
      ref={setRef}
      data-refkey="landingEl"
    >
      <LandingComponent />
    </LandingWrapper>
  );
};

export default LandingPage;
