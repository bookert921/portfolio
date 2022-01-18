import {
  HeroContent,
  HeroImage,
  ImageContainer,
  LandingContainer,
} from "./LandingElements";
import {
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import About from "../About";
import { StaticImage } from "gatsby-plugin-image";

const LandingPage = () => {
  const theme = useTheme();
  const tabletsLess = useMediaQuery(
    theme.breakpoints.down("tablet")
  );
  return (
    <LandingContainer>
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
              }}
              layout="constrained"
              height={250}
              width={250}
            />
          </HeroImage>
        </ImageContainer>

        <Typography
          variant={tabletsLess ? "h5" : "h3"}
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
      </HeroContent>
      <Toolbar
        sx={{
          width: "100%",
          padding: 0,
        }}
      />
    </LandingContainer>
  );
};

export default LandingPage;
