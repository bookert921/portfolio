import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import { NavLink } from "types/interfaces";
import { PageContextProvider } from "@contexts";

const StyledSiteWrapper = styled(Box, {
  name: "SiteWrapper",
})(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
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
        <StyledSiteWrapper>
          <Navbar
            theme={currentTheme}
            toggleTheme={setCurrentTheme}
            links={siteMap}
          />
          {children}
        </StyledSiteWrapper>
      </PageContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
