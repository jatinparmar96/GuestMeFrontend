import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import filterParamsSelector from '../../../Recoil/filter';
import areasAtom from '../../../Recoil/filter/areasAtom';
import deliveryMethodAtom from '../../../Recoil/filter/deliveryMethodAtom';
import languageAtom from '../../../Recoil/filter/languageAtom';
import locationAtom from '../../../Recoil/filter/locationAtom';
import priceAtom from '../../../Recoil/filter/priceAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';
import { RangeSlider } from '../../RangeSlider/RangeSlider';

const LandingPageFilter = (props) => {
  const [areas, setAreas] = useRecoilState(areasAtom);
  const [price, setPrice] = useRecoilState(priceAtom);
  const [location, setLocation] = useRecoilState(locationAtom);
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [deliveryMethod, setDeliveryMethod] =
    useRecoilState(deliveryMethodAtom);

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
