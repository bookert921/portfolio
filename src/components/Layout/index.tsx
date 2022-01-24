import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import { NavLink } from "types/interfaces";
import { RefContextProvider } from "@contexts";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const siteMenu: NavLink[] = [
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

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />
      <RefContextProvider>
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          links={siteMenu}
        />
        <StyledMainWrapper as="main">
          {children}
        </StyledMainWrapper>
      </RefContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
