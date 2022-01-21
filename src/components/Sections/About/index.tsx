import {
  Box,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Hexagon from "@components/Hexagon";
import OptimizationSVG from "@components/Hexagon/OptimizationSVG";
import MobileSVG from "@components/Hexagon/MobileSVG";
import PerformanceSVG from "@components/Hexagon/PerformanceSVG";
import SecureSVG from "@components/Hexagon/SecureSVG";
import FeatureCard from "@components/Card/Feature";

const AboutSection = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingTop: theme.spacing(5),
}));

const AboutPage = () => {
  const theme = useTheme();
  return (
    <AboutSection id="about" component="section">
      <Grid container flexGrow={1} justifyContent="center">
        <Grid item sm={12} component="article">
          <Typography>
            I'm baby marfa kogi cred taxidermy banjo,
            sriracha cliche heirloom snackwave unicorn tacos
            iPhone +1 squid. Try-hard pork belly migas af
            actually bitters. Copper mug etsy semiotics
            coloring book shoreditch tilde. Sustainable
            unicorn keytar hella authentic sriracha
            wayfarers pitchfork celiac tilde flexitarian.
          </Typography>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} md={6} lg={3}>
          <FeatureCard
            title="Optimize"
            text="Secure marfa kogi cred taxidermy banjo, sriracha cliche."
          >
            <Hexagon>
              <OptimizationSVG
                color={theme.palette.secondary.main}
              />
            </Hexagon>
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Secure"
            text="Secure marfa kogi cred taxidermy banjo, sriracha cliche."
          >
            <Hexagon>
              <SecureSVG
                color={theme.palette.secondary.main}
              />
            </Hexagon>
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Perform"
            text="Secure marfa kogi cred taxidermy banjo, sriracha cliche."
          >
            <Hexagon>
              <PerformanceSVG
                color={theme.palette.secondary.main}
              />
            </Hexagon>
          </FeatureCard>
        </Grid>
        <Grid item sx={{ minWidth: "150px" }} sm={6} lg={3}>
          <FeatureCard
            title="Reach"
            text="Secure marfa kogi cred taxidermy banjo, sriracha cliche."
          >
            <Hexagon>
              <MobileSVG
                color={theme.palette.secondary.main}
              />
            </Hexagon>
          </FeatureCard>
        </Grid>
      </Grid>
    </AboutSection>
  );
};

export default AboutPage;
