import { RangeSlider } from '../../RangeSlider/RangeSlider';

const PriceFilterComponent = ({ maxPrice }) => {
  return (
    <fieldset>
      <div className="slider">
        <RangeSlider priceMax={maxPrice} />
      </div>
    </fieldset>
  );
};

export default PriceFilterComponent;
