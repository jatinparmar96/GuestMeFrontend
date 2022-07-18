import React from 'react';

import { SpeakerList } from '../../Components/SpeakerList/SpeakerList';

import style from './Speakers.module.scss';

/**@type {React.FC<any>} */
export const Speakers = (props) => {
  const {
    speakers,
    count,
    page,
    hasNextPage,
    hasPrevPage,
    handleNextPage,
    handlePrevPage,
  } = props;

  const pageFirst = (page - 1) * 10 + 1;
  const pageLast = (page - 1) * 10 + 10;

  return (
    <div>
      <div className={style.speakersHeading}>
        <div className="resultCounter">
          Results: {pageFirst}-{pageLast} speakers / {count} speakers
        </div>
        <div className={style.paging}>
          <span
            onClick={handlePrevPage}
            className={`${style.arrow} ${
              hasPrevPage ? style.arrowEnable : style.arrowDisable
            }`}
          >
            {' '}
            {'<'}
          </span>
          <span
            onClick={handleNextPage}
            className={`${style.arrow} ${
              hasNextPage ? style.arrowEnable : style.arrowDisable
            }`}
          >
            {' '}
            {'>'}
          </span>
        </div>
      </div>
      <SpeakerList speakers={speakers} />
    </div>
  );
};
