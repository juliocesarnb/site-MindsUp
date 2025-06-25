"use client";
import React from 'react';

const AnimatedBarChart = () => {
    return (
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="100%" height="100%" fill="none" />

      {/* Bars */}
      <rect x="30" y="130" width="30" height="40" fill="#c084fc">
        <animate attributeName="height" from="0" to="40" dur="0.8s" fill="freeze" />
        <animate attributeName="y" from="170" to="130" dur="0.8s" fill="freeze" />
      </rect>
      <rect x="70" y="100" width="30" height="70" fill="#a855f7">
        <animate attributeName="height" from="0" to="70" dur="0.8s" fill="freeze" />
        <animate attributeName="y" from="170" to="100" dur="0.8s" fill="freeze" />
      </rect>
      <rect x="110" y="70" width="30" height="100" fill="#7e22ce">
        <animate attributeName="height" from="0" to="100" dur="0.8s" fill="freeze" />
        <animate attributeName="y" from="170" to="70" dur="0.8s" fill="freeze" />
      </rect>
      <rect x="150" y="50" width="30" height="120" fill="#5b21b6">
        <animate attributeName="height" from="0" to="120" dur="0.8s" fill="freeze" />
        <animate attributeName="y" from="170" to="50" dur="0.8s" fill="freeze" />
      </rect>

      {/* Base line */}
      <line x1="20" y1="170" x2="220" y2="170" stroke="#5b21b6" strokeWidth="2" />

    </svg>
  );
};
export default AnimatedBarChart;
