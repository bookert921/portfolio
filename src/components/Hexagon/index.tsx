import { StyledHexagon } from "./HexagonElements";

const Hexagon: React.FC = ({ children }) => {
  return (
    <StyledHexagon component="div">
      {children}
      &#x2B22;
    </StyledHexagon>
  );
};

export default Hexagon;
