import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { NavbarContext } from "@components/Navbar/NavbarContext";

const AboutSection = styled(Box)<{
  navHeight: number;
}>(({ theme, navHeight }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    height: "100vh",
    paddingTop: `${navHeight}px`,
  },
}));

const AboutContent = styled("article")(() => ({
  display: "grid",
  height: "100%",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  gridTemplateAreas: `"text"
        "cards"`,
}));

const AboutTextContainer = styled("section")(() => ({
  gridArea: "text",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const AboutCardContainer = styled("section")(() => ({
  gridArea: "cards",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const About = () => {
  const { navHeight } = useContext(NavbarContext);
  console.log("navHeight from About", navHeight);
  return (
    <AboutSection navHeight={navHeight}>
      <AboutContent>
        <AboutCardContainer></AboutCardContainer>
        <AboutTextContainer>
          <Typography>
            I'm baby marfa kogi cred taxidermy banjo,
            sriracha cliche heirloom snackwave unicorn tacos
            iPhone +1 squid. Try-hard pork belly migas af
            actually bitters. Copper mug etsy semiotics
            coloring book shoreditch tilde. Sustainable
            unicorn keytar hella authentic sriracha
            wayfarers pitchfork celiac tilde flexitarian.
          </Typography>
        </AboutTextContainer>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
