import NavLinks from '../nav-links/NavLinks';

import classes from './DesktopNavigation.module.scss';
const DesktopNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
};
export default DesktopNavigation;