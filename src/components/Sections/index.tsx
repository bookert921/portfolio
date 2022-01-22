import { PageContext } from "@contexts";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

const Content = styled(Box, {
  name: "ContentWrapper",
})(() => ({
  position: "relative",
  minHeight: "100vh",
  "&.blur": {
    overflow: "hidden",
    filter: "blur(5px) brightness(0.7)",
    transition: "all 0.5s ease",
    pointerEvents: "none",
    userSelect: "none",
  },
}));

const Section: React.FC = ({ children }) => {
  const { sideOpen } = useContext(PageContext);
  return (
    <Content className={sideOpen ? "blur" : ""}>
      {children}
    </Content>
  );
};

export default Section;
