import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import About from "../About";
import { StaticImage } from "gatsby-plugin-image";
import { useOrientation } from "@hooks";

const LandingPage = () => {
  const { landscape } = useOrientation();
  const theme = useTheme();
  const mobile = useMediaQuery(
    theme.breakpoints.down("tablet")
  );
  return (
    <Box
      component="section"
      sx={{
        height: "calc(100vh - 4em)",
        width: "100%",
        flexGrow: 1,
        paddingTop: landscape ? 0 : "2em",
      }}
    >
      <Box>{landscape && "landscape"}</Box>
      <Grid container component="article">
        <Grid component="div" item xs={12}>
          <Box
            sx={{
              position: "relative",
              width: landscape ? "350px" : "300px",
              margin: "0 auto",
              height: "300px",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                maxHeight: mobile ? "200px" : "250px",
                maxWidth: mobile ? "200px" : "250px",
              }}
            >
              <StaticImage
                alt="profile view of self"
                src="../../../assets/images/self.png"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{
                  borderRadius: "50%",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            >
              <Typography
                variant={mobile ? "h4" : "h5"}
                color={
                  theme.palette.mode === "dark"
                    ? "white"
                    : "primary.main"
                }
                fontWeight="bold"
                gridArea={"text"}
                textAlign="right"
              >
                Let's
              </Typography>
              <Typography
                variant={mobile ? "h6" : "h5"}
                color="secondary.main"
                fontWeight="bold"
                gridArea={"text"}
                textAlign="right"
              >
                Build
              </Typography>
              <Typography
                variant={mobile ? "h4" : "h5"}
                color={
                  theme.palette.mode === "dark"
                    ? "white"
                    : "primary.main"
                }
                fontWeight="bold"
                gridArea={"text"}
                textAlign="right"
              >
                Your
              </Typography>
              <Typography
                variant={mobile ? "h4" : "h5"}
                color={
                  theme.palette.mode === "dark"
                    ? "white"
                    : "primary.main"
                }
                fontWeight="bold"
                gridArea={"text"}
                textAlign="right"
              >
                Dream App
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;

/* 
return (
    <LandingContainer>
      <ContentWrapper>
        <HeroContent>
          <ImageContainer>
            <HeroImage>
              <StaticImage
                alt="profile view of self"
                src="../../../assets/images/self.png"
                style={{
                  borderRadius: "50%",
                }}
                imgStyle={{
                  borderRadius: "0%",
                  maxHeight: "250px",
                  maxWidth: "250px",
                }}
                layout="constrained"
                placeholder="blurred"
                height={200}
                width={200}
              />
            </HeroImage>
          </ImageContainer>

          <TextContainer>
            <Typography
              variant={mobile ? "h6" : "h5"}
              color={
                theme.palette.mode === "dark"
                  ? "white"
                  : "primary.main"
              }
              fontWeight="bold"
              gridArea={"text"}
            >
              Let's{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                }}
              >
                Build
              </Box>{" "}
              Your Dream App
            </Typography>
          </TextContainer>
        </HeroContent>
      </ContentWrapper>
    </LandingContainer>
  );
*/
