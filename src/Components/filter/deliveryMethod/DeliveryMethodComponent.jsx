import useFilter from '../../../hooks/useFilter';
import deliveryMethodFilterAtom from '../../../Recoil/filter/deliveryMethodFilterAtom';
import { CheckBoxItem } from '../../CheckBoxItem/CheckBoxItem';

const DeliveryMethodComponent = (props) => {
  const [, setDeliveryMethod] = useFilter({
    selector: deliveryMethodFilterAtom,
  });

  return (
    <fieldset onChange={setDeliveryMethod}>
      <CheckBoxItem label="In Person" propName="isInPerson" />
      <CheckBoxItem label="Online" propName="isOnline" />
    </fieldset>
  );
};

export default DeliveryMethodComponent;
