import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getSpeakers } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Filter } from '../../Containers/Filter/Filter';
import { Speakers } from '../../Containers/Speakers/Speakers';
import filterParamsSelector from '../../Recoil/filter';
import style from './FindASpeaker.module.scss';

/**@type {React.FC<any>} */
export const FindASpeaker = (props) => {
  /**@type {[number, React.Dispatch<number>]} */
  const [count, setCount] = useState();

  /**@type {[SpeakerResponse[], React.Dispatch<SpeakerResponse[]>]} */
  const [speakers, setSpeakers] = useState([]);

  const filter = useRecoilValue(filterParamsSelector);

  useEffect(() => {
    (async () => {
      const { data } = await getSpeakers(filter);
      const { speakers, count } = data;

      setSpeakers(speakers);
      setCount(count);
    })();
  }, [filter]);

  return (
    <div>
      <PageHeading text="Find a speaker" />
      <div className={style.breadCrumbs}>Home {'>'} Find a speaker</div>
      <div className={style.contentContainer}>
        <aside>
          <Filter />
        </aside>
        <main>
          <Speakers speakers={speakers} count={count} />
        </main>
      </div>
    </div>
  );
};

/**
 * @typedef {import('../../Components/Speaker/SpeakerType').SpeakerResponse} SpeakerResponse
 */
