import About from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import {
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container>
      <LandingPage />
      {media ? <About /> : null}
    </Container>
  );
}
