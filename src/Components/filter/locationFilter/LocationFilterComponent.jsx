import useFilter from '../../../hooks/useFilter';
import locationFilterAtom from '../../../Recoil/filter/locationFilterAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const LocationFilterComponent = (props) => {
  const [, setLocation] = useFilter({ selector: locationFilterAtom });

  return (
    <fieldset onChange={setLocation}>
      <CheckBoxItem label="Vancouver" />
      <CheckBoxItem label="Burnaby" />
    </fieldset>
  );
};
export default LocationFilterComponent;
