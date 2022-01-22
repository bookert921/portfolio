import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "@components/Navbar";
import {
  useDarkMode,
  useDOMRef,
  useFixed,
  useToggle,
} from "@hooks";
import { theme } from "@styles";
import { FixedNavProps, NavLink } from "types/interfaces";
import { Page, Content } from "./LayoutElements";
import Sidebar from "@components/Sidebar";

const Layout: React.FC<{ siteMap: NavLink[] }> = ({
  children,
  siteMap,
}) => {
  const [currentTheme, setCurrentTheme] = useDarkMode();
  const [open, setOpen] = useToggle();
  const [DOMRef, setRef] = useDOMRef();
  const fixed = useFixed(DOMRef as FixedNavProps);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateAreas: "1fr auto",
          gridTemplateColumns: "100%",
        }}
      >
        <ThemeProvider theme={theme(currentTheme)}>
          <CssBaseline />
          <Page ref={setRef} data-refkey="mainEl" as="main">
            <Navbar
              theme={currentTheme}
              toggleTheme={setCurrentTheme}
              open={open}
              setOpen={setOpen}
              fixed={fixed}
              setRef={setRef}
              links={siteMap}
            />
            <Content className={open ? "blur" : ""}>
              {children}
            </Content>
          </Page>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Layout;
