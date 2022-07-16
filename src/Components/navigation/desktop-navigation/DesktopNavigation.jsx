import NavLinks from '../nav-links/NavLinks';
import NavLinksFooter from '../nav-links/NavLinksFooter';

import classes from './DesktopNavigation.module.scss';
const DesktopNavigation = (props) => {
  if (props.footer) {
    return (
      <nav className={classes.navigationFooter}>
        <NavLinksFooter className={classes.navLinks} />
      </nav>
    );
  }
  return (
    <nav className={classes.navigation}>
      <NavLinks className={classes.navLinks} />
    </nav>
  );
};
export default DesktopNavigation;
