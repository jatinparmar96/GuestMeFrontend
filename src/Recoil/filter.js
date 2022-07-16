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
import areasFilterAtom from './filter/areasFilterAtom';
import deliveryMethodFilterAtom from './filter/deliveryMethodFilterAtom';
import locationFilterAtom from './filter/locationFilterAtom';
import priceFilterAtom from './filter/priceFilterAtom';

const filterParamsSelector = selector({
  key: 'filterParamsSelector',
  get: ({ get }) => {
    const areas = get(areasFilterAtom);
    const price = get(priceFilterAtom);
    const locations = get(locationFilterAtom);
    const deliveryMethod = get(deliveryMethodFilterAtom);

    return {
      areas,
      price,
      locations,
      deliveryMethod,
    };
  },
});

export default filterParamsSelector;
