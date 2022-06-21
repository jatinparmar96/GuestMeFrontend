import React from 'react';

import CheckBoxItem from '../../Components/CheckBoxItem/CheckBoxItem';

import style from './Filter.module.scss';

/**@type {React.FC<any>} */
export const Filter = (props) => {
  return (
    <form className={style.form}>
      <fieldset className={style.fieldset}>
        <legend>Area of expertise</legend>
        <CheckBoxItem label="finance" />
        <CheckBoxItem label="Law" />
        <CheckBoxItem label="Arts" />
        <CheckBoxItem label="Science" />
        <CheckBoxItem
          label="Health & Well-being"
          propName="HealthAndWellbeing"
        />
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend>Price per hour</legend>
        <CheckBoxItem label="Free" />
        <div className={style.slider}>
          <input
            type="range"
            name="pricePerHour"
            id="pricePerHour"
            min="0"
            max="500"
          />
          <input
            type="range"
            name="pricePerHour"
            id="pricePerHour"
            min="0"
            max="500"
          />
        </div>
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend>Delivery Method</legend>
        <CheckBoxItem label="online" />
        <CheckBoxItem label="in-person" />
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend>Language</legend>
        <CheckBoxItem label="English" />
        <CheckBoxItem label="Spanish" />
      </fieldset>
      <fieldset className={style.fieldset}>
        <legend>Location</legend>
        <CheckBoxItem label="Vancouver" />
        <CheckBoxItem label="Burnaby" />
      </fieldset>
    </form>
  );
};
