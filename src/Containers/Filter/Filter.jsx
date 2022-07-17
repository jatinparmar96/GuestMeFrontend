import React, { useEffect, useState } from 'react';

import { Accordion } from '../../Components/Accordion/Accordion';

import { getMaxPrice } from '../../Api/Speaker.service';

import AreaFilterComponent from '../../Components/filter/areaFilter/AreaFilterComponent';
import DeliveryMethodComponent from '../../Components/filter/deliveryMethod/DeliveryMethodComponent';
import LanguageFilterComponent from '../../Components/filter/languageFilter/LanguageFilterComponent';
import LocationFilterComponent from '../../Components/filter/locationFilter/LocationFilterComponent';
import PriceFilterComponent from '../../Components/filter/priceFilter/PriceFilterComponent';
import style from './Filter.module.scss';

/**@type {React.FC<any>} */
export const Filter = (props) => {
  const [priceMax, setPriceMax] = useState(500);

  useEffect(() => {
    getMaxPrice(setPriceMax).then((res) => {
      setPriceMax(res.data.maxPrice);
    });
  }, []);

  return (
    <form className={style.form}>
      <Accordion label="Area of expertise">
        <AreaFilterComponent />
      </Accordion>
      <Accordion label="Price per hour">
        <PriceFilterComponent maxPrice={priceMax} />
      </Accordion>
      <Accordion label="Delivery Method">
        <DeliveryMethodComponent />
      </Accordion>
      <Accordion label="Language">
        <LanguageFilterComponent />
      </Accordion>
      <Accordion label="Location">
        <LocationFilterComponent />
      </Accordion>
    </form>
  );
};
