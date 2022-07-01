import { useState } from 'react';

const useAuth = () => {
  const [user] = useState(localStorage.getItem('token'));
  return user;
};

export default useAuth;
