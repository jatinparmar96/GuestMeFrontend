import useFilter from '../../../hooks/useFilter';
import deliveryMethodFilterAtom from '../../../Recoil/filter/deliveryMethodFilterAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const DeliveryMethodComponent = (props) => {
  const [, setDeliveryMethod] = useFilter({
    selector: deliveryMethodFilterAtom,
  });

  return (
    <fieldset onChange={setDeliveryMethod}>
      <CheckBoxItem label="Delivery" />
      <CheckBoxItem label="Pickup" />
    </fieldset>
  );
};

export default DeliveryMethodComponent;
