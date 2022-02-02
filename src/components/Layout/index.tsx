import { CssBaseline, Container } from "@mui/material";
import Navbar from "@components/Navbar";
import { NavLink } from "types/interfaces";
import { RefContextProvider } from "@contexts";
import Footer from "@components/Footer";
import { DarkModeContextProvider } from "@contexts";
import React from "react";
import SEO from "@components/SEO";
import { styled } from "@mui/material/styles";

const siteMenu: NavLink[] = [
  { url: "/", name: "home" },
  { url: "#about", name: "about" },
  { url: "#work", name: "work" },
  // { url: "#projects", name: "projects" },
  { url: "#contact", name: "contact" },
];

const StyledMainWrapper = styled(Container, {
  name: "MainWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
}));

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <SEO title="Portfolio" />
      <DarkModeContextProvider>
        <CssBaseline />
        <RefContextProvider>
          <Navbar links={siteMenu} />

          <StyledMainWrapper as="main">
            {children}
            <Footer />
          </StyledMainWrapper>
        </RefContextProvider>
      </DarkModeContextProvider>
    </React.Fragment>
  );
};

export default Layout;
