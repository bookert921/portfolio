import {
  HeroContent,
  HeroImage,
  HeroWrapper,
  LandingContainer,
} from "./LandingElements";
import { useContext } from "react";
import { NavbarContext } from "@components/Navbar/NavbarContext";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import About from "../About";
import { StaticImage } from "gatsby-plugin-image";

const LandingPage = () => {
  const { navHeight } = useContext(NavbarContext);
  const theme = useTheme();
  // const media = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletsLess = useMediaQuery(
    theme.breakpoints.between("xs", "sm")
  );
  const smallerScreen = useMediaQuery("(max-width: 400px)");
  return (
    <LandingContainer navHeight={navHeight}>
      <HeroWrapper>
        <HeroContent>
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

          <Typography
            variant={tabletsLess ? "h5" : "h3"}
            color={
              theme.palette.mode === "dark"
                ? "white"
                : "primary.main"
            }
            fontWeight="bold"
            sx={{
              textAlign: smallerScreen ? "center" : "left",
            }}
            lineHeight={tabletsLess ? "1.25em" : "1em"}
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
      </HeroWrapper>
    </LandingContainer>
  );
};

export default LandingPage;
