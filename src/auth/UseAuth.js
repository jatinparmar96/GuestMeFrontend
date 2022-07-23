import { useRecoilState } from 'recoil';
import tokenAtom from '../Recoil/Authentication/atom';

const useAuth = () => {
  const [user] = useRecoilState(tokenAtom);
  return [user];
};

export default useAuth;
