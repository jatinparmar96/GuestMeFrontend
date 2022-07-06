import React from 'react';

import { SpeakerList } from '../../components/speakerList/SpeakerList';

import style from './Speakers.module.scss';

/**@type {React.FC<any>} */
export const Speakers = (props) => {
  const { speakers, count } = props;

  return (
    <div>
      <div className={style.speakersHeading}>
        <div className="resultCounter">
          Results: 1-10 speakers / {count} speakers
        </div>
        <div className={style.paging}>
          {'<'} {'>'}
        </div>
      </div>
      <SpeakerList speakers={speakers} />
    </div>
  );
};
