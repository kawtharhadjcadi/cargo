import React from 'react';

function HeroShape() {
  return (
    <svg width="749" height="959" viewBox="0 0 749 959" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M995.906 48.0611C995.906 6.37447 950.677 -19.5912 914.678 1.4283L26.7716 519.867C-8.92392 540.709 -8.92381 592.29 26.7717 613.133L914.678 1131.57C950.677 1152.59 995.906 1126.63 995.906 1084.94L995.906 48.0611Z"
        fill="url(#hero-gradient)"
      />
      <defs>
        <linearGradient
          id="hero-gradient"
          x1="176.918"
          y1="277.644"
          x2="865.565"
          y2="1114.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00670B" />
          <stop offset="1" stopColor="#133D18" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HeroShape;
