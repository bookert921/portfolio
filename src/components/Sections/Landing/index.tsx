import { LandingContainer } from "./LandingElements";
import { useContext } from "react";
import { NavbarContext } from "@components/Navbar/NavbarContext";
import Hero from "./Hero/Hero";
import { useMediaQuery, useTheme } from "@mui/material";
import About from "../About";

const LandingPage = () => {
  const { navHeight } = useContext(NavbarContext);
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <LandingContainer navHeight={navHeight}>
      <Hero />
      {media ? <About /> : null}
    </LandingContainer>
  );
};

export default LandingPage;
