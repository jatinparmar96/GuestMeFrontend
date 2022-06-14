import { atom } from 'recoil';

const tokenAtom = atom({
  key: 'tokenAtom',
  default: {
    name: 'token',
    value: '',
  },
});

export default tokenAtom;
