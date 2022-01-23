import Layout from "@components/Layout";
import AboutPage from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "types/interfaces";

export const siteMenu: NavLink[] = [
  { url: "/", name: "home" },
  { url: "#about", name: "about" },
  { url: "#work", name: "work" },
  { url: "#projects", name: "projects" },
  { url: "#contact", name: "contact" },
];

const StyledMainWrapper = styled(Container, {
  name: "MainWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
}));

export default function Home() {
  return (
    <Layout siteMap={siteMenu}>
      <StyledMainWrapper as="main">
        <LandingPage />
        <AboutPage />
      </StyledMainWrapper>
    </Layout>
  );
}
