import Layout from "@components/Layout";
import AboutPage from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import { PageContext } from "@contexts";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledMainWrapper = styled(Container, {
  name: "MainWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
}));

export default function Home() {
  return (
    <StyledMainWrapper as="main">
      <LandingPage />
      <AboutPage />
    </StyledMainWrapper>
  );
}
