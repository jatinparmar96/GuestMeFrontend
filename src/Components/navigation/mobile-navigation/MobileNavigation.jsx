import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close-icon.svg';
import { ReactComponent as HamburgerIcon } from '../../../assets/icons/hamburger-icon.svg';
import NavLinks from '../nav-links/NavLinks';
import classes from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

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
