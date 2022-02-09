import React, { useCallback, useEffect, useState } from "react";
import { useDOMRef } from "@hooks";
import { animated, config, useSprings, useSpring } from "react-spring";
import { SVGPathProps } from "@types";

export const AnimatedSVGPaths: React.FC<{
  paths: SVGPathProps[];
  stroke: string;
  strokeWidth?: string;
  [props: string]: any;
}> = ({ paths, stroke, strokeWidth = 4, ...props }) => {
  const { DOMRef, setRef } = useDOMRef();
  const [length, setLength] = useState<Record<string, number>>({});

  // Is an object of base values
  const from = (length: number) => ({ strokeDashoffset: length });
  // Is an object, function, or array
  const to = { strokeDashoffset: 0 };

  const getLengths = useCallback(() => {
    for (const key in DOMRef) {
      setLength((prevState) => ({
        ...prevState,
        [key]: DOMRef[key].getTotalLength(),
      }));
    }
  }, [DOMRef]);

  useEffect(() => {
    if (!DOMRef) return;
    getLengths();
  }, [DOMRef]);

  const springs = useSprings(
    paths.length,
    paths.map((_, i) => {
      return {
        from: from(length[`${paths[i].label}-${i}`]),
        ...to,
        strokeDashoffset: 1,
        config: config.molasses,
        delay: i * 300,
      };
    })
  );

  const spring = useSpring({
    from: { fill: "transparent" },
    to: { fill: props.fill },
    config: config.molasses,
    delay: 3000,
  });

  const animatedPaths = springs.map((animatedStyle, index) => {
    const label = paths[index].label;
    const d = paths[index].d;
    return (
      <animated.path
        key={`${label}-${index}`}
        style={animatedStyle}
        stroke={stroke}
        strokeWidth={strokeWidth || "4"}
        data-refkey={`${label}-${index}`}
        ref={setRef}
        d={d}
        fontFamily="Bitter"
        strokeDasharray={length[`${label}-${index}`]}
        strokeDashoffset={animatedStyle.strokeDashoffset.to(
          (strokeDashoffset) => {
            if (!length[`${label}-${index}`]) return 0;
            return strokeDashoffset * length[`${label}-${index}`];
          }
        )}
        {...props}
        fill={props.fill ? spring.fill : "inherit"}
      />
    );
  });

  return <React.Fragment>{animatedPaths}</React.Fragment>;
};

export const AnimatedSVGContainer: React.FC<{
  fill: string;
  height?: string | number;
  width?: string | number;
  viewBox?: string;
  [props: string]: any;
}> = ({ children, fill, height = 100, width = 200, viewBox, ...props }) => {
  const styles = useSpring({
    from: { fill: "transparent" },
    to: { fill },
    config: config.molasses,
    delay: 3000,
  });
  return (
    <animated.svg
      width={width}
      height={height}
      viewBox={viewBox ? viewBox : "0 0 375 80"}
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
      {...props}
    >
      {children}
    </animated.svg>
  );
};

const AnimatedSVGHeader: React.FC<{
  paths: SVGPathProps[];
  containerFill: string;
  pathFill: string;
}> = ({ paths, containerFill, pathFill }) => {
  return (
    <AnimatedSVGContainer fill={containerFill}>
      <AnimatedSVGPaths paths={paths} stroke={pathFill} />
    </AnimatedSVGContainer>
  );
};

export default AnimatedSVGHeader;
