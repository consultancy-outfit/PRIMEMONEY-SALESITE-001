import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconAb5(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width={122}
        height={122}
        viewBox="0 0 122 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2" filter="url(#filter0_f_2303_3112)">
          <rect
            x={13}
            y={13}
            width={96}
            height={96}
            rx={44}
            fill="url(#paint0_radial_2303_3112)"
          />
        </g>
        <mask
          id="mask0_2303_3112"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={43}
          y={43}
          width={36}
          height={36}
        >
          <path d="M43 43H79V79H43V43Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2303_3112)">
          <path
            d="M61 44.4063L47.2188 50.1281V57.0837C47.2188 66.0854 52.6658 74.192 61 77.5938C69.3341 74.192 74.7812 66.0854 74.7812 57.0837V50.1281L61 44.4063Z"
            stroke="#222222"
            strokeWidth="2.8125"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.5156 59.8825L59.4457 63.8125L66.4844 56.7739"
            stroke="#222222"
            strokeWidth="2.8125"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2303_3112"
            x="0.3"
            y="0.3"
            width="121.4"
            height="121.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6.35"
              result="effect1_foregroundBlur_2303_3112"
            />
          </filter>
          <radialGradient
            id="paint0_radial_2303_3112"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.3395 58.8902) rotate(-2.26679) scale(94.8588)"
          >
            <stop stopColor="#EF4BCB" />
            <stop offset={1} stopColor="#34897B" />
          </radialGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default IconAb5;
