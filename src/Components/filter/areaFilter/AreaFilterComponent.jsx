import useFilter from '../../../hooks/useFilter';
import areasFilterAtom from '../../../Recoil/filter/areasFilterAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const AreaFilterComponent = () => {
  const [, setArea] = useFilter({
    selector: areasFilterAtom,
  });
  return (
    <div>
      <fieldset onChange={setArea}>
        <CheckBoxItem label="Finance" />
        <CheckBoxItem label="Law" />
        <CheckBoxItem label="Arts" />
        <CheckBoxItem label="Science" />
        <CheckBoxItem
          label="Health & Well-being"
          propName="HealthAndWellbeing"
        />
      </fieldset>
    </div>
  );
};
export default AreaFilterComponent;
