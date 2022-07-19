import { atom } from 'recoil';

const priceFilterAtom = atom({
  key: 'priceFilterAtom',
  default: [0, Infinity],
});

export default priceFilterAtom;
