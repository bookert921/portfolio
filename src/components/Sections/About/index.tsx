import { Typography, Grid, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import OptimizationSVG from "@components/Hexagon/OptimizationSVG";
import MobileSVG from "@components/Hexagon/MobileSVG";
import PerformanceSVG from "@components/Hexagon/PerformanceSVG";
import SecureSVG from "@components/Hexagon/SecureSVG";
import FeatureCard from "@components/Card/Feature";
import AboutHeader from "@components/Header/AboutHeader";

const AboutSection = styled(Box, {
  name: "AboutSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  flexDirection: "column",
}));

const AboutPage = () => {
  const theme = useTheme();
  return (
    <AboutSection id="about" component="section">
      <AboutHeader />
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          sm={12}
          component="article"
          sx={{
            display: "flex",
            gap: "0.5em",
            flexDirection: "column",
          }}
        >
          <Typography>
            I am a Software Engineer (SWE) with experience in both Frontend and
            Backend development.
          </Typography>
          <Typography>
            I come from a software testing background and my approach is always
            Mobile-First and Test Driven. This ensures quality, responsive
            designs across most devices and a reliable user experience.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        component="article"
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: theme.spacing(5) }}
      >
        <Grid item sx={{ minWidth: "150px" }} md={6} lg={3}>
          <FeatureCard
            title="Optimize"
            text="Continually enhanced web products through research, testing, and strategic design"
          >
            <OptimizationSVG />
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Secure"
            text="Trust that your data is secure from attackers and fault tolerant against natural disasters"
          >
            <SecureSVG />
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Perform"
            text="Blazing fast performance utilizing the latest and greatest technologies like GatsbyJS for SSG/SSR to push your product forward and make sure you never get left behind"
          >
            <PerformanceSVG />
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Reach"
            text="High availability through cloud-based architecture and resources like Google Cloud Platform or Amazon Web Services"
          >
            <MobileSVG />
          </FeatureCard>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutPage;
