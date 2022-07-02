import logo from '../../assets/logo-colored.png';
import DesktopNavigation from '../../Components/navigation/desktop-navigation/DesktopNavigation';
import MobileNavigation from '../../Components/navigation/mobile-navigation/MobileNavigation';
import styles from './Header.module.scss';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};
