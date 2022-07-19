import useFilter from '../../../hooks/useFilter';
import locationFilterAtom from '../../../Recoil/filter/locationFilterAtom';
import { locationFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const LocationFilterComponent = (props) => {
  const [location, setLocation] = useFilter({ selector: locationFilterAtom });

  return (
    <fieldset onChange={setLocation}>
      {locationFilterValues.map((filter, index) => (
        <CheckBoxItem
          key={index}
          checked={location.includes(filter.value)}
          label={filter.label}
          propName={filter.value}
        />
      ))}
    </fieldset>
  );
};
export default LocationFilterComponent;
