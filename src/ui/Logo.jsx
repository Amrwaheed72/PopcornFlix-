import React from 'react';

const Logo = ({ color = '#FF0000' }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 -40 600 115"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        letterSpacing: '0.5em',
      }}
    >
      <defs>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}
        </style>
        <path id="curve" d="M 20,75 A 290,50 0 0 1 580,75" fill="none" />

        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{
              stopColor: 'rgba(255,255,255,0.4)',
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: 'rgba(255,255,255,0)',
              stopOpacity: 1,
            }}
          />
        </linearGradient>

        <filter id="dropShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
          <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
          <feFlood floodColor="#000" floodOpacity="0.3" result="offsetColor" />
          <feComposite
            in="offsetColor"
            in2="offsetBlur"
            operator="in"
            result="offsetBlur"
          />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text fontSize="100" filter="url(#dropShadow)">
        <textPath href="#curve" startOffset="50%" textAnchor="middle">
          <tspan fontWeight="bold" fill={color}>
            POPCORNFLIX
          </tspan>
        </textPath>
      </text>

      <text fontSize="100">
        <textPath
          href="#curve"
          startOffset="50%"
          textAnchor="middle"
          fontWeight="bold"
          fill="url(#textGradient)"
        >
          POPCORNFLIX
        </textPath>
      </text>
    </svg>
  );
};
export default Logo;
