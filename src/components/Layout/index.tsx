import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import { NavLink } from "types/interfaces";
import { PageContextProvider } from "@contexts";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Section from "@components/Sections";

export const Content = styled(Container, {
  name: "ContentWrapper",
})(() => ({
  position: "relative",
  minHeight: "100vh",
  "&.blur": {
    overflow: "hidden",
    filter: "blur(5px) brightness(0.7)",
    transition: "all 0.5s ease",
    pointerEvents: "none",
    userSelect: "none",
  },
}));

const Layout: React.FC<{ siteMap: NavLink[] }> = ({
  children,
  siteMap,
}) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />
      <PageContextProvider>
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          links={siteMap}
        />
        <Section>{children}</Section>
      </PageContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
