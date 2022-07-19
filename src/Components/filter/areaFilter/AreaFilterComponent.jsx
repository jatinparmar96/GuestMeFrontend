import useFilter from '../../../hooks/useFilter';
import areasFilterAtom from '../../../Recoil/filter/areasFilterAtom';
import { areaFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

import style from '../filter.module.scss';

const AreaFilterComponent = () => {
  const [area, setArea] = useFilter({
    selector: areasFilterAtom,
  });

  return (
    <fieldset onChange={setArea} className={style.fieldset}>
      {areaFilterValues.map((filter, index) => (
        <CheckBoxItem
          key={index}
          checked={area.includes(filter.value)}
          label={filter.label}
          propName={filter.value}
        />
      ))}
    </fieldset>
  );
};
export default AreaFilterComponent;
