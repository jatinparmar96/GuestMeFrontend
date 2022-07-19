import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../../Recoil/Authentication/atom';
import { removeAuthInformation } from '../../../Utils/Utils';
import style from './NavLinks.module.scss';

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
    class: style.primaryButton,
  },
  {
    path: '/register',
    name: 'Register',
    class: style.secondaryButton,
  },
];

const loggedInLinks = [{ path: '/speakers/mypage', name: 'My Page' }];

const NavLinks = (props) => {
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
          <Link className={style.link} key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </ul>
      <ul className={props.className}>
        {!user.value ? (
          authLinks.map((link, index) => (
            <Link
              key={index}
              className={`${style.link} ${style.button} ${link.class}`}
              to={link.path}
            >
              {link.name}
            </Link>
          ))
        ) : (
          <>
            {loggedInLinks.map((link, index) => (
              <Link
                key={index}
                className={`${style.link} ${link.class}`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
            <Link className={style.link} to="/" onClick={handleLogout}>
              Logout
            </Link>
          </>
        )}
      </ul>
    </>
  );
};

export default NavLinks;
