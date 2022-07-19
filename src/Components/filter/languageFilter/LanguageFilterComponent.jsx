import useFilter from '../../../hooks/useFilter';
import languageFilterAtom from '../../../Recoil/filter/languageFilterAtom';
import { languageFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const LanguageFilterComponent = (props) => {
  const [language, setLanguage] = useFilter({ selector: languageFilterAtom });

  return (
    <fieldset onChange={setLanguage}>
      {languageFilterValues.map((filter, index) => (
        <CheckBoxItem
          key={index}
          checked={language.includes(filter.value)}
          label={filter.label}
          propName={filter.value}
        />
      ))}
    </fieldset>
  );
};
export default LanguageFilterComponent;
