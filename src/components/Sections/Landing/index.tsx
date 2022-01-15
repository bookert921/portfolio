import { StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ContentWrapper,
  ImageWrapper,
  LandingContainer,
} from "./LandingElements";

const LandingPage = () => {
  const theme = useTheme();
  const tabletsLess = useMediaQuery(
    theme.breakpoints.between("xs", "sm")
  );

  return (
    <LandingContainer>
      <ContentWrapper>
        <ImageWrapper>
          <StaticImage
            alt="profile view of self"
            src="../../../assets/images/self.png"
            style={{
              borderRadius: "50%",
            }}
            imgStyle={{
              borderRadius: "0%",
            }}
            layout="fixed"
            height={250}
            width={250}
          />
        </ImageWrapper>

        <Typography
          variant={tabletsLess ? "h5" : "h3"}
          color={
            theme.palette.mode === "dark"
              ? "white"
              : "primary.main"
          }
          fontWeight="bold"
          sx={{ textAlign: "left" }}
          lineHeight={tabletsLess ? "1.25em" : "1em"}
        >
          Let's{" "}
          <Box
            sx={{
              display: "inline-block",
              color: theme.palette.secondary.main,
            }}
          >
            Build
          </Box>{" "}
          Your Dream App
        </Typography>
      </ContentWrapper>

      <Typography>
        I'm baby marfa kogi cred taxidermy banjo, sriracha
        cliche heirloom snackwave unicorn tacos iPhone +1
        squid. Try-hard pork belly migas af actually
        bitters. Copper mug etsy semiotics coloring book
        shoreditch tilde. Sustainable unicorn keytar hella
        authentic sriracha wayfarers pitchfork celiac tilde
        flexitarian.
      </Typography>
    </LandingContainer>
  );
};

export default LandingPage;
