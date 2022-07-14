//@ts-check
import React from 'react';
import style from './BreadCrumbs.module.scss';

import { Link } from 'react-router-dom';

/**@type {React.FC<{currentPosition: string}>} */
const BreadCrumbs = (props) => {
  return (
    <div className={style.breadCrumbsContainer}>
      <div className={style.breadCrumbs}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <span>{'>'}</span>
        <span> {props.currentPosition}</span>
      </div>
    </div>
  );
};

export default BreadCrumbs;
