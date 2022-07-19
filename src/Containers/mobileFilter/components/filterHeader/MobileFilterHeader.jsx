//@ts-check
import React from 'react';
import { ReactComponent as Inspector } from '../../../../assets/icons/inspector.svg';
import style from './MobileFilterHeader.module.scss';

/**@type {React.FC<Props>} */
export const MobileFilterHeader = ({
  handleReset,
  inspectMode,
  setInspectMode,
}) => {
  return (
    <div className={style.filterHeader}>
      <h3 className={style.filterHeaderHeading}>Search filters</h3>
      {inspectMode ? (
        <>
          <span onClick={() => handleReset()} className={style.clearFilter}>
            Clear all
          </span>
          <span className={style.apply} onClick={() => setInspectMode(false)}>
            Apply
          </span>
        </>
      ) : (
        <div className={style.inspector}>
          <Inspector
            onClick={() => {
              setInspectMode(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

/**
 * @typedef {Object} Props
 * @property {Function} handleReset
 * @property {boolean} inspectMode
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setInspectMode
 */
