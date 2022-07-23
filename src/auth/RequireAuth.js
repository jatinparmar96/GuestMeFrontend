import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import tokenAtom from '../Recoil/Authentication/atom';

const RequireAuth = ({ children, type }) => {
  const user = useRecoilValue(tokenAtom);
  let location = useLocation();
  if (!user.value) {
    if (type === 'speaker') {
      return (
        <Navigate
          to="/login"
          state={{ from: location, userType: 'speaker' }}
          replace
        />
      );
    } else {
      return (
        <Navigate
          to="/login"
          state={{ from: location, userType: 'organization' }}
          replace
        />
      );
    }
  }
  return children;
};

export default RequireAuth;
