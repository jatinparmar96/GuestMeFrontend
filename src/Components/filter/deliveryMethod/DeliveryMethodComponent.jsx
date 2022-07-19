import useFilter from '../../../hooks/useFilter';
import deliveryMethodFilterAtom from '../../../Recoil/filter/deliveryMethodFilterAtom';
import { deliveryMethodFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';
import style from '../filter.module.scss';

const DeliveryMethodComponent = (props) => {
  const [delivery, setDeliveryMethod] = useFilter({
    selector: deliveryMethodFilterAtom,
  });

  return (
    <fieldset onChange={setDeliveryMethod} className={style.fieldset}>
      {deliveryMethodFilterValues.map((filter, index) => (
        <CheckBoxItem
          key={index}
          checked={delivery.includes(filter.value)}
          label={filter.label}
          propName={filter.value}
        />
      ))}
    </fieldset>
  );
};

export default DeliveryMethodComponent;
