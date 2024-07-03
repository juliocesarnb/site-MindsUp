'use client'
import React from 'react';

const SpinAnimate = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-7 h-7 border-4 text-blue-400 animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
      </div>
    </div>
  );
};

export default SpinAnimate;
