import useFilter from '../../../hooks/useFilter';
import languageFilterAtom from '../../../Recoil/filter/languageFilterAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const LanguageFilterComponent = (props) => {
  const [, setLanguage] = useFilter({ selector: languageFilterAtom });
  return (
    <fieldset onChange={setLanguage}>
      <CheckBoxItem label="English" />
      <CheckBoxItem label="Spanish" />
    </fieldset>
  );
};
export default LanguageFilterComponent;
