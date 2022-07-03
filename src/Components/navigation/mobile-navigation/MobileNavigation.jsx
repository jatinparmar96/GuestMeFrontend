import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-icon.svg';
import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-icon.svg';
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
    <nav className={classes.navigation}>
      <HamburgerIcon
        className={classes.hamburgerIcon}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className={classes.linksContainer}>
          <CloseIcon onClick={() => setOpen(false)} />
          <NavLinks className={classes.links} />
        </div>
      )}
    </nav>
  );
};
export default MobileNavigation;
