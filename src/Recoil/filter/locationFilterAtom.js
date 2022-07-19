import { atom } from 'recoil';

const locationFilterAtom = atom({
  key: 'locationFilterAtom',
  default: [],
});

export default locationFilterAtom;
