//@ts-check
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getSpeakers } from '../../Api/Speaker.service';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Filter } from '../../Containers/Filter/Filter';
import { MobileFilter } from '../../Containers/mobileFilter/MobileFilter';
import { Speakers } from '../../Containers/Speakers/Speakers';
import filterParamsSelector from '../../Recoil/filter';
import style from './FindASpeaker.module.scss';

/**@type {React.FC<any>} */
export const FindASpeaker = (props) => {
  /**@type {[number | undefined, React.Dispatch<number>]} */
  const [count, setCount] = useState();
  /**@type {[SpeakerResponse[], React.Dispatch<SpeakerResponse[]>]} */
  // @ts-ignore
  const [speakers, setSpeakers] = useState([]);
  /**@type {[number, React.Dispatch<number>]} */
  const [page, setPage] = useState(1);
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [hasNextPage, setHasNextPage] = useState(true);
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [hasPrevPage, setHasPrevPage] = useState(false);

  /**
   * @description Handles the change of all states
   */
  const filter = useRecoilValue(filterParamsSelector);

  // @ts-ignore
  const handleNextPage = () => hasNextPage && setPage((prev) => prev + 1);
  // @ts-ignore
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
    <div className={style.styleContainer}>
      <div className={style.pageContainer}>
        <PageHeading text="Find a speaker" />
        <BreadCrumbs currentPosition="Find a Speaker" />

        <div className={style.contentContainer}>
          <aside className={style.aside}>
            <Filter />
            <MobileFilter />
          </aside>
          <div>
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
          </div>
        </div>
      </div>
      <div className={style.backgroundBeige}></div>
      <div className={style.backgroundWhite}></div>
    </div>
  );
};

/**
 * @typedef {import('../../Components/Speaker/SpeakerType').SpeakerResponse} SpeakerResponse
 */
