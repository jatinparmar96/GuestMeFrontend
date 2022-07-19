import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './UseAuth';

const RequireAuth = ({ children, type }) => {
  const user = useAuth();
  let location = useLocation();
  if (!user) {
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
