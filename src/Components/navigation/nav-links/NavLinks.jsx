import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../../Recoil/Authentication/atom';
import classes from './NavLinks.module.scss';

//TODO: Maybe move them to a utils or routes file?
const mainLinks = [
  {
    path: '/',
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

const NavLinks = (props) => {
  const [user] = useRecoilState(tokenAtom);
  console.log(user);
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
        <Link className={classes.link} to="/logout">
          Logout
        </Link>
      )}
    </ul>
  );
};

export default NavLinks;
