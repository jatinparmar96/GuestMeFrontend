import React, { useEffect, useState } from 'react';

import { Accordion } from '../../Components/Accordion/Accordion';

import { getMaxPrice } from '../../Api/Speaker.service';
import { CheckBoxItem } from '../../Components/CheckBoxItem/CheckBoxItem';
import { RangeSlider } from '../../Components/RangeSlider/RangeSlider';

import style from './Filter.module.scss';

/**@type {React.FC<any>} */
export const Filter = (props) => {
  const [priceMax, setPriceMax] = useState(500);

  useEffect(() => {
    getMaxPrice(setPriceMax).then((res) => {
      setPriceMax(res.data.maxPrice);
    });
  }, []);

  const {
    changeAreas,
    setPrice,
    changeDeliveryMethod,
    changeLanguages,
    changeLocations,
  } = props;

  return (
    <form className={style.form}>
      <Accordion label="Area of expertise">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeAreas(event)}
        >
          <CheckBoxItem label="Finance" />
          <CheckBoxItem label="Law" />
          <CheckBoxItem label="Arts" />
          <CheckBoxItem label="Science" />
          <CheckBoxItem
            label="Health & Well-being"
            propName="HealthAndWellbeing"
          />
        </fieldset>
      </Accordion>
      <Accordion label="Price per hour">
        <fieldset className={style.fieldset}>
          <div className={style.slider}>
            <RangeSlider setPrice={setPrice} priceMax={priceMax} />
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Delivery Method">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeDeliveryMethod(event)}
        >
          <CheckBoxItem label="online" propName="isOnline" />
          <CheckBoxItem label="in-person" propName="isInPerson" />
        </fieldset>
      </Accordion>
      <Accordion label="Language">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeLanguages(event)}
        >
          <CheckBoxItem label="English" />
          <CheckBoxItem label="Spanish" />
        </fieldset>
      </Accordion>
      <Accordion label="Location">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeLocations(event)}
        >
          <CheckBoxItem label="Vancouver" />
          <CheckBoxItem label="Burnaby" />
        </fieldset>
      </Accordion>
    </form>
  );
};
