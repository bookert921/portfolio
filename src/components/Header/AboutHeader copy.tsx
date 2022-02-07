import React, { SVGProps, useCallback, useEffect, useState } from "react";
import { useTheme, Theme } from "@mui/material/styles";
import { useDOMRef } from "@hooks";
import {
  useSpring,
  animated,
  config,
  SpringValue,
  useSprings,
} from "react-spring";
import { DOMRef } from "@types";
import { Button } from "@mui/material";

const A: React.FC<{
  theme: Theme;
  setRef: (node: any) => void;
  length: number;
}> = ({ theme, length, setRef, ...props }) => {
  return (
    <path
      {...props}
      data-refkey="A"
      ref={setRef}
      d="M62.2008 71.165L69.584 72.8719V76.9999H44.624V72.8719L53.5 71.165L49 58.0879H21.7444L17.069 71.0479L26 72.8719V76.9999H2.38403V72.8719L9.77574 71.0479L32.624 10.0879L40.592 9.79994L62.2008 71.165ZM23.5 52.3279H47.5L36 17.0077L23.5 52.3279Z"
      stroke={theme.palette.secondary.main}
      strokeWidth="4"
    />
  );
};

const B: React.FC<{
  theme: Theme;
  setRef: (node: any) => void;
  length: number;
}> = ({ theme, length, setRef, ...props }) => {
  return (
    <path
      {...props}
      data-refkey="B"
      ref={setRef}
      d="M92.75 77.8639C90.446 77.8639 87.982 77.7039 85.358 77.3839C82.798 77.0639 80.078 76.5839 77.198 75.9439V9.5L69.71 7.68793V3.55994L84.878 2.88794V32.3499C87.566 29.7899 89.294 28.8079 92.174 27.4639C95.054 26.1199 97.934 25.4479 100.814 25.4479C104.398 25.4479 107.598 26.4399 110.414 28.4239C113.294 30.4079 115.566 33.2879 117.23 37.0639C118.894 40.8399 119.726 45.4799 119.726 50.9839C119.726 55.1439 119.182 58.8879 118.094 62.2159C117.07 65.5439 115.47 68.3599 113.294 70.6639C111.118 72.9679 108.334 74.7599 104.942 76.0399C101.55 77.2559 97.486 77.8639 92.75 77.8639ZM94.19 72.1999C99.886 72.1999 104.238 70.4399 107.246 66.9199C110.254 63.3999 111.758 58.2799 111.758 51.5599C111.758 47.3359 111.15 43.7199 109.934 40.7119C108.782 37.7039 107.182 35.3999 105.134 33.7999C103.086 32.1359 100.75 31.3039 98.126 31.3039C95.886 31.3039 93.55 31.9119 91.118 33.1279C88.75 34.2799 87.31 35.1436 84.878 37.5756V70.9311C88.782 71.9551 91.182 72.1999 94.19 72.1999Z"
      stroke={theme.palette.secondary.main}
      strokeWidth="4"
    />
  );
};

const O: React.FC<{
  theme: Theme;
  setRef: (node: any) => void;
  length: number;
}> = ({ theme, length, setRef, ...props }) => {
  return (
    <path
      {...props}
      data-refkey="O"
      ref={setRef}
      d="M152.568 25.4479C159.608 25.4479 165.112 27.6559 169.08 32.0719C173.112 36.4879 175.128 42.7279 175.128 50.7919C175.128 56.2319 174.136 60.9999 172.152 65.0959C170.232 69.1279 167.48 72.2639 163.896 74.5039C160.312 76.7439 155.992 77.8639 150.936 77.8639C144.024 77.8639 138.616 75.7199 134.712 71.4319C130.808 67.0799 128.856 60.8399 128.856 52.7119C128.856 47.0799 129.784 42.2479 131.64 38.2159C133.56 34.1199 136.28 30.9839 139.8 28.8079C143.384 26.5679 147.64 25.4479 152.568 25.4479ZM152.184 31.1119C147.256 31.1119 143.48 32.9679 140.856 36.6799C138.232 40.3919 136.92 45.6079 136.92 52.3279C136.92 58.9199 138.168 63.8799 140.664 67.2079C143.16 70.5359 146.744 72.1999 151.416 72.1999C154.808 72.1999 157.656 71.3679 159.96 69.7039C162.328 67.9759 164.088 65.5439 165.24 62.4079C166.456 59.2719 167.064 55.5279 167.064 51.1759C167.064 44.6479 165.752 39.6879 163.128 36.2959C160.568 32.8399 156.92 31.1119 152.184 31.1119Z"
      stroke={theme.palette.secondary.main}
      strokeWidth="4"
    />
  );
};

const U: React.FC<{
  theme: Theme;
  setRef: (node: any) => void;
  length: number;
}> = ({ theme, length, setRef, ...props }) => {
  return (
    <path
      {...props}
      data-refkey="U"
      ref={setRef}
      d="M203.275 77.8639C199.051 77.8639 195.563 76.5519 192.811 73.9279C190.059 71.3039 188.683 67.2719 188.683 61.8319V30.8368L181.099 30.7279V26.5999L196.363 26.0239V60.4879C196.363 64.3279 197.259 67.1759 199.051 69.0319C200.843 70.8879 203.243 71.8159 206.251 71.8159C208.619 71.8159 211.179 71.1759 213.931 69.8959C216.683 68.6159 221.515 64.5087 221.515 64.5087L222.375 32.347L213.931 30.7279V26.5999L229.195 25.9279V71.2655L236.683 72.6799V76.9039L223.243 77.4799L222.007 69.5C218.871 72.764 216.683 74.0239 213.163 75.5599C209.707 77.0959 206.411 77.8639 203.275 77.8639Z"
      stroke={theme.palette.secondary.main}
      strokeWidth="4"
    />
  );
};

const T: React.FC<{
  theme: Theme;
  setRef: (node: any) => void;
  length: number;
}> = ({ theme, length, setRef, ...props }) => {
  return (
    <path
      {...props}
      data-refkey="T"
      ref={setRef}
      d="M259.734 77.8639C256.406 77.8639 253.782 76.8399 251.862 74.7919C249.942 72.6799 248.982 69.5119 248.982 65.2879V31.6879H240.342V27.4639L248.982 26.2178V14.8879L256.662 13.6399V26.3119H270.678L270.39 31.6879H256.662V64.2319C256.662 66.9199 257.174 68.8719 258.198 70.0879C259.286 71.3039 260.79 71.9119 262.71 71.9119C263.862 71.9119 265.11 71.7199 266.454 71.3359C267.798 70.9519 269.238 70.4079 270.774 69.7039L272.406 74.1199C267.862 76.6159 263.638 77.8639 259.734 77.8639Z"
      stroke={theme.palette.secondary.main}
      strokeWidth="4"
    />
  );
};

// const useTextAnimation = () => {
//   const { DOMRef, setRef } = useDOMRef();
//   const [length, setLength] = useState<Record<string, number>>({});
//   const [flip, setFlip] = useState(false);
//   const { strokeDashoffset } = useSpring({
//     reset: true,
//     reverse: flip,
//     from: { strokeDashoffset: 0 },
//     strokeDashoffset: 1,
//     config: config.molasses,
//     delay: 200,
//     onRest: () => setFlip(!flip),
//   });

//   const getLengths = useCallback(() => {
//     for (const key in DOMRef) {
//       setLength((prevState) => ({
//         ...prevState,
//         [key]: DOMRef[key].getTotalLength(),
//       }));
//     }
//   }, [DOMRef]);

//   useEffect(() => {
//     if (!DOMRef) return;
//     getLengths();
//   }, [DOMRef]);

//   return { length, strokeDashoffset, setRef };
// };

const AboutHeader = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const { DOMRef, setRef } = useDOMRef();
  const [length, setLength] = useState<Record<string, number>>({});
  const [flip, setFlip] = useState(false);

  const getLengths = useCallback(() => {
    for (const key in DOMRef) {
      setLength((prevState) => ({
        ...prevState,
        [key]: DOMRef[key].getTotalLength(),
      }));
    }
  }, [DOMRef]);

  const l = ["A", "B", "O", "U", "T"];
  useEffect(() => {
    if (!DOMRef) return;
    getLengths();
    console.log(length);
  }, [DOMRef, length[l[0]]]);

  const letters = [
    <A key="A" theme={theme} setRef={setRef} length={length["A"]} />,
    <B key="B" theme={theme} setRef={setRef} length={length["B"]} />,
    <O key="O" theme={theme} setRef={setRef} length={length["O"]} />,
    <U key="U" theme={theme} setRef={setRef} length={length["U"]} />,
    <T key="T" theme={theme} setRef={setRef} length={length["T"]} />,
  ];

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => {
      return {
        reset: true,
        reverse: flip,
        from: { strokeDashoffset: 0 },
        to: { strokeDashoffset: length[l[i]] },
        strokeDashoffset: 1,
        config: config.molasses,
        delay: 200,
        onRest: () => setFlip(!flip),
      };
    })
  );

  const animatedLetters = springs.map((animatedStyle, index) => {
    return (
      <animated.path
        key={index}
        style={animatedStyle}
        strokeDasharray={length[l[index]]}
        strokeDashoffset={animatedStyle.strokeDashoffset.to(
          (strokeDashoffset) => {
            if (!length[l[index]]) return 0;
            return strokeDashoffset * length[l[index]];
          }
        )}
      >
        {letters[index]}
      </animated.path>
    );
  });

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClick}>
        Toggle
      </Button>
      <svg
        width="200"
        height="100"
        viewBox="0 0 275 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {animatedLetters}
      </svg>
    </React.Fragment>
  );
};

export default AboutHeader;
