import NavLinks from '../nav-links/NavLinks';
import classes from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
};
export default MobileNavigation;
