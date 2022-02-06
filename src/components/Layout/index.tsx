import { CssBaseline, Container } from "@mui/material";
import Navbar from "@components/Navbar";
import { RefContextProvider } from "@contexts";
import Footer from "@components/Footer";
import { DarkModeContextProvider } from "@contexts";
import React from "react";
import SEO from "@components/SEO";
import { styled } from "@mui/material/styles";

const StyledMainWrapper = styled(Container, {
  name: "MainWrapper",
})(() => ({
  minHeight: "100vh",
  width: "100%",
  position: "relative",
}));

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <SEO />
      <DarkModeContextProvider>
        <CssBaseline />
        <RefContextProvider>
          <Navbar />

          <StyledMainWrapper as="main" id="main">
            {children}
            <Footer />
          </StyledMainWrapper>
        </RefContextProvider>
      </DarkModeContextProvider>
    </React.Fragment>
  );
};

export default Layout;
