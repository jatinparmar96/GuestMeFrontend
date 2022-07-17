import { useRecoilValue } from 'recoil';
import filterParamsSelector from '../../../Recoil/filter';

import AreaFilterComponent from '../../filter/areaFilter/AreaFilterComponent';
import DeliveryMethodComponent from '../../filter/deliveryMethod/DeliveryMethodComponent';
import LanguageFilterComponent from '../../filter/languageFilter/LanguageFilterComponent';
import LocationFilterComponent from '../../filter/locationFilter/LocationFilterComponent';
import PriceFilterComponent from '../../filter/priceFilter/PriceFilterComponent';

const LandingPageFilter = (props) => {
  const filterParams = useRecoilValue(filterParamsSelector);

  const handleSubmit = () => {
    console.log(filterParams);
  };
  return (
    <div className="filterContainer">
      <form>
        {/* <fieldset onChange={handleAreasChange}>
          <CheckBoxItem label="Finance" />
          <CheckBoxItem label="Law" />
          <CheckBoxItem label="Arts" />
          <CheckBoxItem label="Science" />
          <CheckBoxItem
            label="Health & Well-being"
            propName="HealthAndWellbeing"
          />
        </fieldset> */}
        <AreaFilterComponent />
        <PriceFilterComponent />
        <DeliveryMethodComponent />

        <LanguageFilterComponent />

        <LocationFilterComponent />
      </form>
      <button onClick={handleSubmit}>Find a speaker</button>
    </div>
  );
};

export default LandingPageFilter;
