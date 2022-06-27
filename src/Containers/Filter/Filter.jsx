import React from 'react';

import { Accordion } from '../../Components/Accordion/Accordion';

import { CheckBoxItem } from '../../Components/CheckBoxItem/CheckBoxItem';
import { RangeSlider } from '../../Components/RangeSlider/RangeSlider';

import style from './Filter.module.scss';

/**@type {React.FC<any>} */
export const Filter = (props) => {
  return (
    <form className={style.form}>
      <Accordion label="Area of expertise">
        <fieldset className={style.fieldset}>
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
          <CheckBoxItem label="Free" />
          <div className={style.slider}>
            <RangeSlider />
          </div>
        </fieldset>
      </Accordion>
      <Accordion label="Delivery Method">
        <fieldset className={style.fieldset}>
          <CheckBoxItem label="online" />
          <CheckBoxItem label="in-person" />
        </fieldset>
      </Accordion>
      <Accordion label="Language">
        <fieldset className={style.fieldset}>
          <CheckBoxItem label="English" />
          <CheckBoxItem label="Spanish" />
        </fieldset>
      </Accordion>
      <Accordion label="Location">
        <fieldset className={style.fieldset}>
          <CheckBoxItem label="Vancouver" />
          <CheckBoxItem label="Burnaby" />
        </fieldset>
      </Accordion>
    </form>
  );
};

