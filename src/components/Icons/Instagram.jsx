import React from 'react';

function Instagram() {
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
        viewBox="0 0 24 24"
      >
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16.5 7.5v.01"></path>
      </svg>
    </div>
  );
}

export default Instagram;
