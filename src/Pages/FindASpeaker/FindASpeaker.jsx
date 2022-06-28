import React, { useEffect, useState } from 'react';

import { getSpeakers } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Filter } from '../../Containers/Filter/Filter';
import { Speakers } from '../../Containers/Speakers/Speakers';
import style from './FindASpeaker.module.scss';

/**@type {React.FC<any>} */
export const FindASpeaker = (props) => {
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [areas, setAreas] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [languages, setLanguages] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [locations, setLocations] = useState([]);
  /**@type {[number[], React.Dispatch<number[]>]} */
  const [price, setPrice] = useState([0, Infinity]);

  /**@type {[number, React.Dispatch<number>]} */
  const [count, setCount] = useState();

  /**@type {[SpeakerResponse[], React.Dispatch<SpeakerResponse[]>]} */
  const [speakers, setSpeakers] = useState([]);

  /**
   * @description Handles the change of all states
   */
  const handleChangeFilter = async () => {
    const isOnline = deliveryMethod.includes('isOnline');
    const isInPerson = deliveryMethod.includes('isInPerson');
    const [priceMin, priceMax] = price;

    const query = `${areas.length > 0 ? `&areas=${areas.join('_')}` : ''}${
      isOnline ? '&isOnline=true' : ''
    }${isInPerson ? '&isInPerson=true' : ''}${
      languages.length > 0 ? `&language=${languages.join('_')}` : ''
    }${
      locations.length > 0 ? `&location=${locations.join('_')}` : ''
    }&priceMin=${priceMin}&priceMax=${priceMax}`;
    console.log(query);

    const { data } = await getSpeakers(query);
    const { speakers, count } = data;

    setSpeakers(speakers);
    setCount(count);
  };

  useEffect(() => {
    handleChangeFilter();
    console.log(locations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areas, price, deliveryMethod, languages, locations]);

  const changeAreas = ({ target: { value, checked } }) => {
    if (checked) {
      setAreas([...areas, value]);
    } else {
      setAreas(areas.filter((area) => area !== value));
    }
  };

  const changeDeliveryMethod = ({ target: { value, checked } }) => {
    if (checked) {
      setDeliveryMethod([...deliveryMethod, value]);
    } else {
      setDeliveryMethod(deliveryMethod.filter((method) => method !== value));
    }
  };
  const changeLanguages = ({ target: { value, checked } }) => {
    if (checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((language) => language !== value));
    }
  };
  const changeLocations = ({ target: { value, checked } }) => {
    if (checked) {
      setLocations([...locations, value]);
    } else {
      setLocations(locations.filter((location) => location !== value));
    }
  };

  return (
    <div>
      <PageHeading text="Find a speaker" />
      <div className={style.breadCrumbs}>Home {'>'} Find a speaker</div>
      <div className={style.contentContainer}>
        <aside>
          <Filter
            changeAreas={changeAreas}
            setPrice={setPrice}
            changeDeliveryMethod={changeDeliveryMethod}
            changeLanguages={changeLanguages}
            changeLocations={changeLocations}
          />
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
