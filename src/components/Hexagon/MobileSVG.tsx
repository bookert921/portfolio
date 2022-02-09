import {
  AnimatedSVGContainer,
  AnimatedSVGPaths,
} from "@components/Header/AnimatedSVGHeader";
import { useTheme } from "@mui/material/styles";
const MobileSVG = () => {
  const theme = useTheme();
  return (
    <AnimatedSVGContainer
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill={theme.palette.primary.main}
    >
      <g filter="url(#filter0_d_684_2861)">
        <AnimatedSVGPaths
          paths={[
            {
              label: "hexagon",
              d: "M78.5763 0L104 50L78.5763 100H29L4 50L29 0H78.5763Z",
            },
          ]}
          stroke={theme.palette.secondary.main}
          strokeWidth="2"
        />
      </g>
      <AnimatedSVGPaths
        paths={[
          {
            label: "phone",
            d: "M59 69.3061L52.525 64.0765L49 66.9235L59 75L79 58.847L75.475 56L59 69.3061Z",
          },
          {
            label: "checkmark",
            d: "M34 71.0769V35.7692H64V53.4231H69V27.9231C68.9985 26.883 68.4712 25.8858 67.5339 25.1504C66.5965 24.4149 65.3256 24.0012 64 24H34C32.6743 24.001 31.4033 24.4147 30.4659 25.1502C29.5285 25.8857 29.0013 26.8829 29 27.9231V71.0769C29.0015 72.117 29.5288 73.1142 30.4661 73.8496C31.4035 74.5851 32.6744 74.9988 34 75H44V71.0769H34ZM34 27.9231H64V31.8462H34V27.9231Z",
          },
        ]}
        stroke={theme.palette.secondary.main}
        strokeWidth="1"
      />
      <defs>
        <filter
          id="filter0_d_684_2861"
          x="0"
          y="0"
          width="108"
          height="108"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_684_2861"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_684_2861"
            result="shape"
          />
        </filter>
      </defs>
    </AnimatedSVGContainer>
  );
};

export default MobileSVG;
