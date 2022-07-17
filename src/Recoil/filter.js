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
import languageFilterAtom from './filter/languageFilterAtom';
import locationFilterAtom from './filter/locationFilterAtom';
import priceFilterAtom from './filter/priceFilterAtom';

const filterParamsSelector = selector({
  key: 'filterParamsSelector',
  get: ({ get }) => {
    const areas = get(areasFilterAtom);
    const price = get(priceFilterAtom);
    const locations = get(locationFilterAtom);
    const deliveryMethod = get(deliveryMethodFilterAtom);
    const languages = get(languageFilterAtom);
    //
    const isOnline = deliveryMethod.includes('isOnline');
    const isInPerson = deliveryMethod.includes('isInPerson');
    const [priceMin, priceMax] = price;

    const query = `${areas.length > 0 ? `&areas=${areas.join('_')}` : ''}${
      isOnline ? '&isOnline=true' : ''
    }${isInPerson ? '&isInPerson=true' : ''}${
      languages.length > 0 ? `&language=${languages.join('_')}` : ''
    }${
      locations.length > 0 ? `&location=${locations.join('_')}` : ''
    }&priceMin=${priceMin}&priceMax=${priceMax}`;
    return query;
  },
});

export default filterParamsSelector;
