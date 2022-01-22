import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import { NavLink } from "types/interfaces";
import { PageContextProvider } from "@contexts";

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
        {children}
      </PageContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
