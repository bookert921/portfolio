const MobileSVG = ({ color }: { color: string }) => {
  return (
    <svg
      className="inner"
      height="48"
      viewBox="0 0 32 32"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20 27.18-2.59-2.59-1.41 1.41 4 4 8-8-1.41-1.41z"
        fill={color}
      />
      <path
        d="m10 28v-18h12v9h2v-13a2.0023 2.0023 0 0 0 -2-2h-12a2.002 2.002 0 0 0 -2 2v22a2.0023 2.0023 0 0 0 2 2h4v-2zm0-22h12v2h-12z"
        fill={color}
      />
      <path d="m0 0h32v32h-32z" fill="none" />
    </svg>
  );
};

export default MobileSVG;
