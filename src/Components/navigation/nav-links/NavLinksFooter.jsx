import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../../Recoil/Authentication/atom';
import { removeAuthInformation } from '../../../Utils/Utils';
import classes from './NavLinksFooter.module.scss';

//TODO: Maybe move them to a utils or routes file?
const mainLinks = [
  {
    path: '/find-a-speaker',
    name: 'Find a speaker',
  },
  {
    path: '/how-it-works',
    name: 'How it works',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
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

const NavLinksFooter = (props) => {
  const [user, setUser] = useRecoilState(tokenAtom);
  console.log(user);
  //Logout the user
  const handleLogout = () => {
    setUser({ name: '', value: '' });
    removeAuthInformation();
  };
  return (
    <>
      <ul className={props.className}>
        {mainLinks.map((link, index) => (
          <Link className={classes.link} key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </ul>

      <ul className={props.className}>

        {!user.value ? (
          authLinks.map((link, index) => (
            <Link key={index} className={classes.link} to={link.path}>
              {link.name}
            </Link>
          ))
        ) : (
          <Link className={classes.link} to="/" onClick={handleLogout}>
            Logout
          </Link>
      )}
      </ul>
      </>
  );
};

export default NavLinksFooter;
