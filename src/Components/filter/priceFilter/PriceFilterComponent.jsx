import useFilter from '../../../hooks/useFilter';
import priceFilterAtom from '../../../Recoil/filter/priceFilterAtom';
import { RangeSlider } from '../../RangeSlider/RangeSlider';

const PriceFilterComponent = ({ maxPrice }) => {
  const [, setPriceFilter] = useFilter({
    selector: priceFilterAtom,
  });

  return (
    <fieldset>
      <div className="slider">
        <RangeSlider setPrice={setPriceFilter} priceMax={maxPrice} />
      </div>
    </fieldset>
  );
};

export default PriceFilterComponent;
