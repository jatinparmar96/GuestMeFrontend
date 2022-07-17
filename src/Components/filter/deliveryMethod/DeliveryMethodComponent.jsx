import useFilter from '../../../hooks/useFilter';
import deliveryMethodFilterAtom from '../../../Recoil/filter/deliveryMethodFilterAtom';
import { deliveryMethodFilterValues } from '../../../Utils/filter-values';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const DeliveryMethodComponent = (props) => {
  const [delivery, setDeliveryMethod] = useFilter({
    selector: deliveryMethodFilterAtom,
  });

  return (
    <fieldset onChange={setDeliveryMethod}>
      {deliveryMethodFilterValues.map((filter) => (
        <CheckBoxItem
          checked={delivery.includes(filter.value)}
          label={filter.label}
          propName={filter.value}
        />
      ))}
    </fieldset>
  );
};

export default DeliveryMethodComponent;
