import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileLandingContent = styled(Box, {
  name: "LandingGrid",
})(() => ({
  position: "relative",
  width: "300px",
  margin: "0 auto",
  height: "300px",
  ["@media (orientation: landscape)"]: {
    width: "230px",
    height: "200px",
  },
}));

const MobileImageWrapper = styled(Box, {
  name: "ImageWrapper",
})(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  maxHeight: "200px",
  maxWidth: "200px",
  ["@media (orientation: landscape)"]: {
    top: "20%",
    right: "20%",
    transform: "translate(-20%, -20%)",
    maxHeight: "150px",
    maxWidth: "150px",
  },
}));

const MobileImageTextWrapper = styled(Box, {
  name: "ImageTextWrapper",
})(() => ({
  position: "absolute",
  bottom: 0,
  right: 0,
}));

const MobileImageText = styled(Typography, {
  name: "ImageText",
})(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.mode === "dark" ? "white" : theme.palette.primary.main,
  fontWeight: "bold",
  textAlign: "right",
  ["&:nth-of-type(2)"]: {
    color: theme.palette.secondary.main,
  },
}));

const IMAGE_TEXT = ["Let's", "Build", "Your", "Dream App"];

const MobileLanding = () => {
  const renderText = IMAGE_TEXT.map((text: string, index: number) => {
    return (
      <MobileImageText variant="h6" key={index}>
        {text}
      </MobileImageText>
    );
  });

  return (
    <MobileLandingContent>
      <MobileImageWrapper>
        <StaticImage
          alt="profile view of self"
          src="../../../../assets/images/self.png"
          layout="constrained"
          placeholder="blurred"
          imgStyle={{
            borderRadius: "50%",
            height: "100%",
            width: "100%",
          }}
        />
      </MobileImageWrapper>
      <MobileImageTextWrapper>{renderText}</MobileImageTextWrapper>
    </MobileLandingContent>
  );
};

export default MobileLanding;
