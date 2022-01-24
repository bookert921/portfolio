import { useTheme } from "@mui/material/styles";

const PerformanceSVG = () => {
  const theme = useTheme();
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_684_2859)">
        <path
          d="M78.5763 0L104 50L78.5763 100H29L4 50L29 0H78.5763Z"
          fill={theme.palette.primary.main}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.0002 75C58.1388 75 65.215 70 65.215 50C65.215 30 58.1388 25 54.0002 25C49.8618 25 42.7854 30.3369 42.7854 50C42.7854 69.6631 49.8618 75 54.0002 75Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7193 63.0952C31.7886 66.4432 40.1829 69.5488 59.6075 59.0726C79.032 48.5964 80.3501 40.2528 78.2808 36.9048C76.2115 33.5568 67.49 30.6277 48.3927 40.9274C29.2953 51.227 27.6501 59.7473 29.7193 63.0952V63.0952Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.7192 36.9048C27.6499 40.2528 28.9679 48.5964 48.3926 59.0726C67.8172 69.5488 76.2114 66.4432 78.2807 63.0952C80.35 59.7473 78.7047 51.227 59.6073 40.9274C40.51 30.6277 31.7885 33.5568 29.7192 36.9048V36.9048Z"
        stroke={theme.palette.secondary.main}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_684_2859"
          x="0"
          y="0"
          width="108"
          height="108"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
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
            result="effect1_dropShadow_684_2859"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_684_2859"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PerformanceSVG;
