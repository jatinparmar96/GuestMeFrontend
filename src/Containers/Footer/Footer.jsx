import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo_mic from '../../assets/logo-mic-green.png';
import logo from '../../assets/logo-white.png';
import twitter from '../../assets/twitter.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return <footer className={styles.footer}>
    <img src={logo_mic} alt="logo" className={styles.logoMic}></img>
    <img src={logo} alt="logo" className={styles.logo}></img>
    <div className={styles.socialIcons}>
      <img src={twitter} alt="twitter logo" className={styles.social}></img>
      <img src={linkedin} alt="linkedin logo" className={styles.social}></img>
      <img src={instagram} alt="instagram logo" className={styles.social}></img>

    </div>

    <p className={styles.copy}>© 2022 GUEST ME All rights reserved.</p>


  </footer>;
};
