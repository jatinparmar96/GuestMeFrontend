import React, { useEffect, useState } from 'react';

import { Accordion } from '../../Components/Accordion/Accordion';

import { CheckBoxItem } from '../../Components/CheckBoxItem/CheckBoxItem';
import { RangeSlider } from '../../Components/RangeSlider/RangeSlider';

import style from './Filter.module.scss';

/**@type {React.FC<any>} */
export const Filter = (props) => {
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [areas, setAreas] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [languages, setLanguages] = useState([]);
  /**@type {[string[], React.Dispatch<string[]>]} */
  const [locations, setLocations] = useState([]);

  const [price, setPrice] = useState([0, Infinity]);

  useEffect(() => {
    handleChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areas, price, deliveryMethod, languages, locations]);

  /**
   * @description Handles the change of all states
   */
  const handleChange = () => {
    console.log('areas: ', areas);
    console.log('price: ', price);
    console.log('deliveryMethod: ', deliveryMethod);
    console.log('languages: ', languages);
    console.log('locations: ', locations);
  };

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
    <form className={style.form}>
      <Accordion label="Area of expertise">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeAreas(event)}
        >
          <CheckBoxItem label="finance" />
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
            <RangeSlider setPrice={setPrice} />
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Delivery Method">
        <fieldset
          className={style.fieldset}
          onChange={(event) => changeDeliveryMethod(event)}
        >
          <CheckBoxItem label="online" />
          <CheckBoxItem label="in-person" />
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
