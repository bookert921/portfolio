import { useTheme } from "@mui/material/styles";

const OptimizationSVG = () => {
  const theme = useTheme();
  return (
    <svg
      className="inner"
      width="108"
      height="108"
      viewBox="0 0 108 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_684_2860)">
        <path
          d="M78.5763 0L104 50L78.5763 100H29L4 50L29 0H78.5763Z"
          fill={theme.palette.primary.main}
        />
      </g>
      <path
        d="M31.636 51.2031C32.196 45.2787 34.4539 39.949 37.8312 35.8878L41.6517 40.3368L43.4195 38.2781L39.6685 33.9101C43.2607 30.4517 47.7915 28.2672 52.75 27.9512V35.1901H55.25V27.9512C60.2085 28.2672 64.7394 30.4518 68.3316 33.9102L64.7323 38.1014L66.4999 40.1602L70.1689 35.888C73.5461 39.9492 75.804 45.2787 76.364 51.2031H71.1054V54.1145H76.5C76.4969 60.4328 74.5724 66.2263 71.3675 70.749L67.092 65.7701L65.3242 67.8288L69.6707 72.8905L69.6549 72.9084L71.394 75C76.0829 69.7124 79 62.301 79 54.0988C79 38.0273 67.8065 25 54 25C40.1935 25 29 38.0273 29 54.0988C29 62.0833 31.7645 69.319 36.2371 74.5752L38.0129 72.5258C38.005 72.5167 37.9972 72.5075 37.9894 72.4982L41.7459 68.1233L39.9781 66.0646L36.3302 70.313C33.3071 65.8567 31.5031 60.2318 31.5 54.1145H36.5659V51.2031H31.636Z"
        fill={theme.palette.secondary.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.3518 57.9303L50.8983 59.8054C50.4157 59.9133 49.9835 60.2228 49.6828 60.6755L47.6347 64.2119C47.4067 65.9793 47.5685 66.6824 48.4656 67.823L51.7576 69.6929C52.2123 69.91 52.7195 69.9262 53.1838 69.7387L69.0783 61.1902C71.4427 60.235 70.8095 57.3808 68.3518 57.9303ZM52.522 66.8878L62.5895 61.4732L51.5495 62.6592L50.047 65.2536C50.0406 65.3718 50.0415 65.4421 50.0432 65.479L52.522 66.8878ZM50.0243 65.4415C50.0246 65.4417 50.0267 65.4458 50.0296 65.4535C50.0255 65.4452 50.024 65.4414 50.0243 65.4415ZM68.9538 60.7722C68.954 60.772 68.9538 60.7722 68.9538 60.7722V60.7722ZM68.3803 58.3787L68.3837 58.376C68.3838 58.376 68.3827 58.3771 68.3803 58.3787Z"
        fill={theme.palette.secondary.main}
      />
      <defs>
        <filter
          id="filter0_d_684_2860"
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
            result="effect1_dropShadow_684_2860"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_684_2860"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default OptimizationSVG;
