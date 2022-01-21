const OptimizationSVG = ({ color }: { color: string }) => {
  return (
    <svg
      className="inner"
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h48v48h-48z" />
      <g
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          stroke: color,
          strokeWidth: 4,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      >
        <path d="m24.0002 45c3.2206 0 8.7273-4.2 8.7273-21s-5.5067-21-8.7273-21c-3.2205 0-8.7273 4.48302-8.7273 21 0 16.517 5.5068 21 8.7273 21z" />
        <path d="m5.105 35c1.6103 2.8123 8.1427 5.421 23.2588-3.379 15.116-8.8 16.1417-15.8087 14.5314-18.621s-8.3973-5.27278-23.2587 3.379c-14.86144 8.6517-16.14176 15.8087-14.5315 18.621z" />
        <path d="m5.10489 13c-1.61026 2.8123-.5846 9.821 14.53151 18.621 15.1161 8.8 21.6484 6.1913 23.2587 3.379s.33-9.9693-14.5315-18.621c-14.8614-8.65178-21.6484-6.1913-23.25871-3.379z" />
      </g>
    </svg>
  );
};

export default OptimizationSVG;
