import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import filterParamsSelector from '../../../Recoil/filter';
import areasFilterAtom from '../../../Recoil/filter/areasFilterAtom';
import deliveryMethodFilterAtom from '../../../Recoil/filter/deliveryMethodFilterAtom';
import languageFilterAtom from '../../../Recoil/filter/languageFilterAtom';
import locationFilterAtom from '../../../Recoil/filter/locationFilterAtom';
import priceFilterAtom from '../../../Recoil/filter/priceFilterAtom';

import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';
import { RangeSlider } from '../../RangeSlider/RangeSlider';

const LandingPageFilter = (props) => {
  const [areas, setAreas] = useRecoilState(areasFilterAtom);
  const [price, setPrice] = useRecoilState(priceFilterAtom);
  const [location, setLocation] = useRecoilState(locationFilterAtom);
  const [language, setLanguage] = useRecoilState(languageFilterAtom);
  const [deliveryMethod, setDeliveryMethod] = useRecoilState(
    deliveryMethodFilterAtom
  );

  const handleAreasChange = ({ target: { value, checked } }) => {
    if (checked) {
      setAreas([...areas, value]);
    } else {
      setAreas(areas.filter((area) => area !== value));
    }
  };
  let priceMax = useRef();
  useEffect(() => {
    priceMax.current = price[1];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePriceChange = (e) => {
    setPrice(e);
  };

  const handleDeliveryMethodChange = ({ target: { value, checked } }) => {
    if (checked) {
      setDeliveryMethod([...deliveryMethod, value]);
    } else {
      setDeliveryMethod(deliveryMethod.filter((method) => method !== value));
    }
  };
  const handleLanguageChange = ({ target: { value, checked } }) => {
    if (checked) {
      setLanguage([...language, value]);
    } else {
      setLanguage(language.filter((lang) => lang !== value));
    }
  };

  const handleLocationChange = ({ target: { value, checked } }) => {
    if (checked) {
      setLocation([...location, value]);
    } else {
      setLocation(location.filter((location) => location !== value));
    }
  };

  const filterParams = useRecoilValue(filterParamsSelector);

  const handleSubmit = () => {
    console.log(filterParams);
  };
  return (
    <div className="filterContainer">
      <form>
        <fieldset onChange={handleAreasChange}>
          <CheckBoxItem label="Finance" />
          <CheckBoxItem label="Law" />
          <CheckBoxItem label="Arts" />
          <CheckBoxItem label="Science" />
          <CheckBoxItem
            label="Health & Well-being"
            propName="HealthAndWellbeing"
          />
        </fieldset>

        <fieldset>
          <div className="slider">
            <RangeSlider
              setPrice={handlePriceChange}
              priceMax={priceMax.current}
            />
          </div>
        </fieldset>
        <fieldset onChange={handleDeliveryMethodChange}>
          <CheckBoxItem label="In Person" propName="isInPerson" />
          <CheckBoxItem label="Online" propName="isOnline" />
        </fieldset>

        <fieldset onChange={handleLanguageChange}>
          <CheckBoxItem label="English" />
          <CheckBoxItem label="Spanish" />
        </fieldset>

        <fieldset onChange={handleLocationChange}>
          <CheckBoxItem label="Vancouver" />
          <CheckBoxItem label="Burnaby" />
        </fieldset>
      </form>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default LandingPageFilter;
