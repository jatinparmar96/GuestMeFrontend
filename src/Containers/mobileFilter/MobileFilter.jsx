import React, { useEffect, useState } from 'react';

import { Accordion } from '../../Components/Accordion/Accordion';

import { useResetRecoilState } from 'recoil';
import { getMaxPrice } from '../../Api/Speaker.service';
import AreaFilterComponent from '../../Components/filter/areaFilter/AreaFilterComponent';
import DeliveryMethodComponent from '../../Components/filter/deliveryMethod/DeliveryMethodComponent';
import LanguageFilterComponent from '../../Components/filter/languageFilter/LanguageFilterComponent';
import LocationFilterComponent from '../../Components/filter/locationFilter/LocationFilterComponent';
import PriceFilterComponent from '../../Components/filter/priceFilter/PriceFilterComponent';
import areasFilterAtom from '../../Recoil/filter/areasFilterAtom';
import { MobileFilterHeader } from './components/filterHeader/MobileFilterHeader';
import style from './MobileFilter.module.scss';

import deliveryMethodFilterAtom from '../../Recoil/filter/deliveryMethodFilterAtom';
import languageFilterAtom from '../../Recoil/filter/languageFilterAtom';
import locationFilterAtom from '../../Recoil/filter/locationFilterAtom';
import priceFilterAtom from '../../Recoil/filter/priceFilterAtom';

/**@type {React.FC<any>} */
export const MobileFilter = (props) => {
  const [priceMax, setPriceMax] = useState(500);

  const [inspectMode, setInspectMode] = useState(false);

  useEffect(() => {
    getMaxPrice(setPriceMax).then((res) => {
      setPriceMax(res.data.maxPrice);
    });
  }, []);

  const resetArea = useResetRecoilState(areasFilterAtom);
  const resetDeliveryMethod = useResetRecoilState(deliveryMethodFilterAtom);
  const resetLanguage = useResetRecoilState(languageFilterAtom);
  const resetLocation = useResetRecoilState(locationFilterAtom);
  const resetPrice = useResetRecoilState(priceFilterAtom);

  const handleReset = () => {
    resetArea();
    resetDeliveryMethod();
    resetLanguage();
    resetLocation();
    resetPrice();
  };

  return (
    <form className={style.form}>
      <div className={style.filterHeader}>
        <MobileFilterHeader
          handleReset={handleReset}
          inspectMode={inspectMode}
          setInspectMode={setInspectMode}
        />
      </div>
      {inspectMode ? (
        <>
          <div className={style.filterContainer}>
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
          </div>
        </>
      ) : null}
    </form>
  );
};
