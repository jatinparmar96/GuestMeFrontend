// const filter = atom({
//   key: 'filter',
//   default: {
//     areas: [],
//     price: [0, Infinity],
//     deliveryMethod: [],
//     locations: [],
//   },
// });
// export default filter;

import { selector } from 'recoil';
import areasAtom from './filter/areasAtom';
import deliveryMethodAtom from './filter/deliveryMethodAtom';
import locationAtom from './filter/locationAtom';
import priceAtom from './filter/priceAtom';

const filterParamsSelector = selector({
  key: 'filterParamsSelector',
  get: ({ get }) => {
    const areas = get(areasAtom);
    const price = get(priceAtom);
    const locations = get(locationAtom);
    const deliveryMethod = get(deliveryMethodAtom);

    return {
      areas,
      price,
      locations,
      deliveryMethod,
    };
  },
});

export default filterParamsSelector;
