import React from 'react';

function Whatsup() {
  return (
    <div className="p-2 rounded-full" style={{ backgroundColor: '#E2EAE4' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="#404A3C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
      </svg>
    </div>
  );
}

export default Whatsup;
