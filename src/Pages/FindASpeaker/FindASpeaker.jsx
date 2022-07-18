import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getSpeakers } from '../../Api/Speaker.service';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
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
  /**@type {[number, React.Dispatch<number>]} */
  const [page, setPage] = useState(1);
  /**@type {[boolean, React.Dispatch<number>]} */
  const [hasNextPage, setHasNextPage] = useState(true);
  /**@type {[boolean, React.Dispatch<number>]} */
  const [hasPrevPage, setHasPrevPage] = useState(false);

  /**
   * @description Handles the change of all states
   */
  const filter = useRecoilValue(filterParamsSelector);

  const handleNextPage = () => hasNextPage && setPage((prev) => prev + 1);
  const handlePrevPage = () => hasPrevPage && setPage((prev) => prev - 1);

  useEffect(() => {
    (async () => {
      const { data } = await getSpeakers(filter, page);
      const { speakers, count } = data;

      setSpeakers(speakers);
      setCount(count);

      setHasNextPage(page * 10 < count);
      setHasPrevPage(page > 1);
    })();
  }, [filter, page]);

  return (
    <div className={style.pageContainer}>
      <PageHeading text="Find a speaker" />
      <BreadCrumbs currentPosition="Find a Speaker" />

      <div className={style.contentContainer}>
        <aside>
          <Filter />
        </aside>
        <main>
          <Speakers
            speakers={speakers}
            count={count}
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </main>
      </div>
    </div>
  );
};

/**
 * @typedef {import('../../Components/Speaker/SpeakerType').SpeakerResponse} SpeakerResponse
 */
