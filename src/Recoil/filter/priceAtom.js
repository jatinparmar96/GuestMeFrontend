import { atom } from 'recoil';

const priceAtom = atom({
  key: 'priceAtom',
  default: [0, 500],
});

export default priceAtom;
