//@ts-check
import React from 'react';

/**@type {React.FC<{pageFirst: number; pageLast: number; count:number}>} */
export const Result = ({ pageFirst, pageLast, count }) => {
  return (
    <>
      {pageFirst}-{pageLast} speakers / {count} speakers
    </>
  );
};
