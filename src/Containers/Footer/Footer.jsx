import logo_mic from '../../assets/logo-mic-green.png';
import logo from '../../assets/logo-white.png';
import DesktopNavigation from '../../Components/navigation/desktop-navigation/DesktopNavigation';
import styles from './Footer.module.scss';

export const Footer = () => {
  return <footer className={styles.footer}>
    <img src={logo_mic} alt="logo" className={styles.logoMic}></img>
    <img src={logo} alt="logo" className={styles.logo}></img>


    <p className={styles.description}>GUEST ME for your schools, for your students to give them opportunities to learn new things.</p>
    <DesktopNavigation className={styles.navigationFooter} footer={true} />
    <p className={styles.copy}>© 2022 GUEST ME All rights reserved.</p>


  </footer>;
};
