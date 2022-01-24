import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import { useDarkMode } from "@hooks";
import { theme } from "@styles";
import { NavLink } from "types/interfaces";
import { PageContextProvider } from "@contexts";

export const siteMenu: NavLink[] = [
  { url: "/", name: "home" },
  { url: "#about", name: "about" },
  { url: "#work", name: "work" },
  { url: "#projects", name: "projects" },
  { url: "#contact", name: "contact" },
];

const Layout: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <CssBaseline />
      <PageContextProvider>
        <Navbar
          theme={currentTheme}
          toggleTheme={setCurrentTheme}
          links={siteMenu}
        />
        {children}
      </PageContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
