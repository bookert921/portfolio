import { StaticImage } from "gatsby-plugin-image";
import {
  MobileImageText,
  MobileImageTextWrapper,
  MobileImageWrapper,
  MobileLandingContent,
} from "./MobileLandingElements";

const IMAGE_TEXT = ["Let's", "Build", "Your", "Dream App"];

const MobileLanding = () => {
  const renderText = IMAGE_TEXT.map(
    (text: string, index: number) => {
      return (
        <MobileImageText variant="h6" key={index}>
          {text}
        </MobileImageText>
      );
    }
  );

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
      <MobileImageTextWrapper>
        {renderText}
      </MobileImageTextWrapper>
    </MobileLandingContent>
  );
};

export default MobileLanding;
