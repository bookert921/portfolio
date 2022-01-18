import {
  ContentWrapper,
  HeroContent,
  HeroImage,
  ImageContainer,
  LandingContainer,
  TextContainer,
} from "./LandingElements";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import About from "../About";
import { StaticImage } from "gatsby-plugin-image";
import { useContext } from "react";
import { NavbarContext } from "@components/Navbar/NavbarContext";

const LandingPage = () => {
  const theme = useTheme();
  const tabletsLess = useMediaQuery(
    theme.breakpoints.down("tablet")
  );
  const { navHeight } = useContext(NavbarContext);
  return (
    <LandingContainer navHeight={navHeight}>
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
              variant={tabletsLess ? "h6" : "h5"}
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
};

export default LandingPage;
