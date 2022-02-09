import { Typography, Grid, Box } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import FeatureCard from "@components/Card/Feature";
import { siteData, textAnimationData } from "@configs";
import AnimatedSVGHeader from "@components/Header/AnimatedSVGHeader";

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
  const { features } = siteData;

  const renderFeatures = features.map((feature) => {
    const { icon, text, title } = feature;
    const Icon = icon;
    return (
      <Grid key={title} item sx={{ minWidth: "150px" }} md={6} lg={3}>
        <FeatureCard title={title} text={text}>
          <Icon />
        </FeatureCard>
      </Grid>
    );
  });
  return (
    <AboutSection id="about" component="section">
      <AnimatedSVGHeader
        paths={textAnimationData.about}
        containerFill={theme.palette.primary.main}
        pathFill={theme.palette.secondary.main}
      />
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
            designs across most devices, and a reliable user experience.
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
        {renderFeatures}
      </Grid>
    </AboutSection>
  );
};

export default AboutPage;
