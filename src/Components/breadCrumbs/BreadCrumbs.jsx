//@ts-check
import React from 'react';
import style from './BreadCrumbs.module.scss';

/**@type {React.FC<{currentPosition: string}>} */
const BreadCrumbs = (props) => {
  return (
    <div className={style.breadCrumbsContainer}>
      <div className={style.breadCrumbs}>
        Home {'>'} {props.currentPosition}
      </div>
    </div>
  );
};

export default BreadCrumbs;
