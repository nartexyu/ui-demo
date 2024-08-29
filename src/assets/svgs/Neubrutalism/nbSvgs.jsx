import React from "react";

// Mobile SVGs
export const CircleSvg = () => (
  <svg
    width="100"
    height="100"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "5%",
      left: "75%",
    }}
    className="z-20"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      strokeWidth="3"
      fill="#bfdbfe"
    />
  </svg>
);

export const TriangleSvg = () => (
  <svg
    width="240"
    height="240"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "0%",
      left: "10%",
      transform: "rotate(20deg)",
    }}
  >
    <polygon
      points="120,30 216,210 24,210"
      stroke="black"
      strokeWidth="3"
      fill="#fbbf24"
    />
  </svg>
);

export const SquareSvg = () => (
  <svg
    width="120"
    height="120"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "60%",
      left: "-10%",
    }}
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      stroke="black"
      strokeWidth="3"
      fill="#34d399"
    />
  </svg>
);

export const StarSvg = () => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 50 50"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "68%",
      left: "50%",
      transform: "rotate(-10deg)",
    }}
  >
    <polygon
      points="25,1 30,20 49,25 30,30 25,49 20,30 1,25 20,20"
      stroke="black"
      strokeWidth="1"
      fill="#f87171"
    />
  </svg>
);

// Desktop SVGs
export const CircleSvgRef = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="100"
    height="100"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "10%",
      left: "70%",
    }}
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      strokeWidth="3"
      fill="#c4b5fd"
    />
  </svg>
));

export const TriangleSvgRef = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="240"
    height="240"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "10%",
      left: "20%",
      transform: "rotate(20deg)",
    }}
  >
    <polygon
      points="120,30 216,210 24,210"
      stroke="black"
      strokeWidth="3"
      fill="#fbbf24"
    />
  </svg>
));

export const SquareSvgRef = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="120"
    height="120"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "75%",
      left: "20%",
    }}
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      stroke="black"
      strokeWidth="3"
      fill="#34d399"
    />
  </svg>
));

export const StarSvgRef = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="240"
    height="240"
    viewBox="0 0 50 50"
    style={{
      filter: "drop-shadow(4px 4px 0px rgba(0, 0, 0, 1))",
      position: "absolute",
      top: "65%",
      left: "60%",
      transform: "rotate(-10deg)",
    }}
  >
    <polygon
      points="25,1 30,20 49,25 30,30 25,49 20,30 1,25 20,20"
      stroke="black"
      strokeWidth="1"
      fill="#f87171"
    />
  </svg>
));

export const Wave = React.forwardRef((props, ref) => {
  return (
    <svg
      ref={ref} // Use the forwarded ref here
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      {...props} // Spread any other props to the SVG element
    >
      <path
        fill="#d9f99d"
        fillOpacity="1"
        d="M0,0L21.8,26.7C43.6,53,87,107,131,128C174.5,149,218,139,262,117.3C305.5,96,349,64,393,74.7C436.4,85,480,139,524,154.7C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,90.7C960,85,1004,107,1047,101.3C1090.9,96,1135,64,1178,58.7C1221.8,53,1265,75,1309,80C1352.7,85,1396,75,1418,69.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      />
      <path
        fill="none"
        stroke="black"
        strokeWidth="4"
        strokeDasharray="4800"
        strokeDashoffset="0"
        d="M0,0L21.8,26.7C43.6,53,87,107,131,128C174.5,149,218,139,262,117.3C305.5,96,349,64,393,74.7C436.4,85,480,139,524,154.7C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,90.7C960,85,1004,107,1047,101.3C1090.9,96,1135,64,1178,58.7C1221.8,53,1265,75,1309,80C1352.7,85,1396,75,1418,69.3L1440,64"
      />
    </svg>
  );
});
