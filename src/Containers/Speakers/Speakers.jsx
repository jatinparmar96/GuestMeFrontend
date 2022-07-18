//@ts-check
import React from 'react';

import { SpeakerList } from '../../Components/SpeakerList/SpeakerList';
import { Arrows } from './components/arrows/Arrows';
import { Result } from './components/result/Result';
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
        <div className={style.resultDisplay}>
          <Result pageFirst={pageFirst} pageLast={pageLast} count={count} />
        </div>
        <div className={style.paging}>
          <Arrows
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </div>
      </div>
      <SpeakerList speakers={speakers} />
      <div className={style.speakerFooter}>
        <Result pageFirst={pageFirst} pageLast={pageLast} count={count} />
        <Arrows
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
        />
      </div>
    </div>
  );
};
