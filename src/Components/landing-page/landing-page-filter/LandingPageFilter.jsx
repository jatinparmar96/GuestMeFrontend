import { useNavigate } from 'react-router-dom';
import AreaFilterComponent from '../../filter/areaFilter/AreaFilterComponent';

import { ReactComponent as CaretDown } from '../../../assets/icons/caret-down.svg';
import DeliveryMethodComponent from '../../filter/deliveryMethod/DeliveryMethodComponent';
import LanguageFilterComponent from '../../filter/languageFilter/LanguageFilterComponent';
import LocationFilterComponent from '../../filter/locationFilter/LocationFilterComponent';
import PriceFilterComponent from '../../filter/priceFilter/PriceFilterComponent';
import style from '././LandingPageFilter.module.scss';

const LandingPageFilter = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/find-a-speaker');
  };
  return (
    <div className={style.filterFormContainer}>
      <form className={style.filterForm}>
        <div className={style.filterContainer}>
          <label className={style.filterLabel}>
            Area of expertise <CaretDown class={style.caretIcon} />
          </label>
          <div className={style.filterValues}>
            <AreaFilterComponent />
          </div>
        </div>

        <div className={style.filterContainer}>
          <label className={style.filterLabel}>Price per hour</label>
          <div className={style.filterValues}>
            <PriceFilterComponent />
          </div>
        </div>

        <div className={style.filterContainer}>
          <div>
            <DeliveryMethodComponent />
          </div>
        </div>

        <div className={style.filterContainer}>
          <label className={style.filterLabel}>
            Language <CaretDown class={style.caretIcon} />
          </label>
          <div className={style.filterValues}>
            <LanguageFilterComponent />
          </div>
        </div>

        <div className={style.filterContainer}>
          <label className={style.filterLabel}>
            Location <CaretDown class={style.caretIcon} />
          </label>
          <div className={style.filterValues}>
            <LocationFilterComponent />
          </div>
        </div>

        <button className={style.primaryButton} onClick={handleSubmit}>
          Find a speaker
        </button>
      </form>

      <button
        className={`${style.primaryButton} ${style.mobileButton}`}
        onClick={handleSubmit}
      >
        Find a speaker
      </button>
    </div>
  );
};

export default LandingPageFilter;
