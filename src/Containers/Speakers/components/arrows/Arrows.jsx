//@ts-check
import React from 'react';
import style from './Arrows.module.scss';

import { ReactComponent as LeftArrowMint } from '../../../../assets/icons/arrows/left-arrow-mint.svg';
import { ReactComponent as LeftArrowGrey } from '../../../../assets/icons/arrows/left-arrow.svg';

import { ReactComponent as RightArrowMint } from '../../../../assets/icons/arrows/right-arrow-mint.svg';
import { ReactComponent as RightArrowGrey } from '../../../../assets/icons/arrows/right-arrow.svg';

/**@type {React.FC<Props>} */
export const Arrows = ({
  handleNextPage,
  handlePrevPage,
  hasNextPage,
  hasPrevPage,
}) => {
  return (
    <div>
      <button onClick={() => handlePrevPage()} className={style.arrow}>
        {hasPrevPage ? <LeftArrowMint /> : <LeftArrowGrey />}
      </button>
      <button onClick={() => handleNextPage()} className={style.arrow}>
        {hasNextPage ? <RightArrowMint /> : <RightArrowGrey />}
      </button>
    </div>
  );
};

/**
 * @typedef {Object} Props
 * @property {Function} handlePrevPage
 * @property {Function} handleNextPage
 * @property {boolean} hasPrevPage
 * @property {boolean} hasNextPage
 */
