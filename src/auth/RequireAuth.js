import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children, type }) => {
  const tokenValue = localStorage.getItem('token');
  let location = useLocation();
  if (!tokenValue) {
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
