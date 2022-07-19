import useFilter from '../../../hooks/useFilter';
import areasFilterAtom from '../../../Recoil/filter/areasFilterAtom';
import { areaFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const AreaFilterComponent = () => {
  const [area, setArea] = useFilter({
    selector: areasFilterAtom,
  });

  return (
    <div>
      <fieldset onChange={setArea}>
        {areaFilterValues.map((filter, index) => (
          <CheckBoxItem
            key={index}
            checked={area.includes(filter.value)}
            label={filter.label}
            propName={filter.value}
          />
        ))}
      </fieldset>
    </div>
  );
};
export default AreaFilterComponent;
