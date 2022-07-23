import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-icon.svg';
import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-icon.svg';
import logo from '../../../assets/logo-colored.png';
import NavLinks from '../nav-links/NavLinks';
import classes from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  // Close the menu when the user navigates to a new page
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className={classes.navigationMobile}>
      <HamburgerIcon
        className={classes.hamburgerIcon}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className={classes.navContainer}>
          <div className={classes.navHeadContainer}>
            <img src={logo} alt="logo" className={classes.logo}></img>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => setOpen(false)}
            />
          </div>
          <div className={classes.linkContainer}></div>
          <NavLinks className={classes.links} />
        </div>
      )}
    </nav>
  );
};
export default MobileNavigation;
