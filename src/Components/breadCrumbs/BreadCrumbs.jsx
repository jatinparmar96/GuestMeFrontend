//@ts-check
import React from 'react';

/**@type {React.FC<{currentPosition: string}>} */
const BreadCrumbs = (props) => {
  return (
    <div>
      <div>
        Home {'>'} {props.currentPosition}
      </div>
    </div>
  );
};

export default BreadCrumbs;
