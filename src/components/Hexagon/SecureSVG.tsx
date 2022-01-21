import { useTheme } from "@mui/material/styles";

const SecureSVG = () => {
  const theme = useTheme();
  return (
    <svg
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_684_2858)">
        <path
          d="M78.5763 0L104 50L78.5763 100H29L4 50L29 0H78.5763Z"
          fill={theme.palette.primary.main}
        />
      </g>
      <path
        d="M72.75 38.6364C72.75 31.2727 64.1281 25 54 25C43.8656 25 35.25 31.2727 35.25 38.6364V44.825C31.2219 48.1331 28.9986 52.3994 29 56.8182C29 66.8545 40.2 75 54.0031 75C67.8063 75 79 66.8545 79 56.8182C79.0018 52.3986 76.7785 48.1316 72.75 44.8227V38.6364ZM41.5 38.6364C41.5 33.7932 47.3406 29.5455 54 29.5455C60.6594 29.5455 66.5 33.7932 66.5 38.6364V41.0886C62.7041 39.4829 58.3909 38.6372 53.9996 38.6376C49.6082 38.638 45.2954 39.4845 41.5 41.0909V38.6364ZM49.3125 66.85L37.7281 58.425L42.1469 55.2114L49.3125 60.4227L65.8531 48.3932L70.2719 51.6068L49.3125 66.85Z"
        fill={theme.palette.secondary.main}
      />
      <defs>
        <filter
          id="filter0_d_684_2858"
          x="0"
          y="0"
          width="108"
          height="108"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood
            flood-opacity="0"
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
            result="effect1_dropShadow_684_2858"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_684_2858"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SecureSVG;
