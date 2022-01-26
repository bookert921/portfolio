import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { NavLink } from "types/interfaces";
import { RefContextProvider } from "@contexts";
import Footer from "@components/Footer";
import { DarkModeContextProvider } from "@contexts";
import { StyledMainWrapper } from "./LayoutElements";
import { theme } from "@styles";

const siteMenu: NavLink[] = [
  { url: "/", name: "home" },
  { url: "#about", name: "about" },
  { url: "#work", name: "work" },
  { url: "#projects", name: "projects" },
  { url: "#contact", name: "contact" },
];

const Layout: React.FC = ({ children }) => {
  return (
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
  );
};

export default Layout;
