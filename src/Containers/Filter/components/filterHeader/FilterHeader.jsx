import React from 'react';
import style from './FilterHeader.module.scss';

export const FilterHeader = ({ handleReset }) => {
  return (
    <div className={style.filterHeader}>
      <h3 className={style.filterHeaderHeading}>Search filters</h3>
      <span onClick={handleReset} className={style.clearFilter}>
        Clear all
      </span>
    </div>
  );
};
