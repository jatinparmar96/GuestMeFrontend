import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../../Recoil/Authentication/atom';
import { removeAuthInformation } from '../../../Utils/Utils';
import classes from './NavLinks.module.scss';

//TODO: Maybe move them to a utils or routes file?
const mainLinks = [
  {
    path: '/find-a-speaker',
    name: 'Find a speaker',
  },
  {
    path: '/',
    name: 'How it works',
  },
  {
    path: '/',
    name: 'About',
  },
  {
    path: '/',
    name: 'Contact',
  },
];
const authLinks = [
  {
    path: '/login',
    name: 'Login',
  },
  {
    path: '/register',
    name: 'Register',
  },
];

const loggedInLinks = [{ path: '/speakers/update/profile', name: 'My Page' }];

const NavLinks = (props) => {
  const [user, setUser] = useRecoilState(tokenAtom);
  console.log(user);
  //Logout the user
  const handleLogout = () => {
    setUser({ name: '', value: '' });
    removeAuthInformation();
  };
  return (
    <ul className={props.className}>
      {mainLinks.map((link, index) => (
        <Link className={classes.link} key={index} to={link.path}>
          {link.name}
        </Link>
      ))}
      {!user.value ? (
        authLinks.map((link, index) => (
          <Link key={index} className={classes.link} to={link.path}>
            {link.name}
          </Link>
        ))
      ) : (
        <>
          {loggedInLinks.map((link, index) => (
            <Link key={index} className={classes.link} to={link.path}>
              {link.name}
            </Link>
          ))}
          <Link className={classes.link} to="/" onClick={handleLogout}>
            Logout
          </Link>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
