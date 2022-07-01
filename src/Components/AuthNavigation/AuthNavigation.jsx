import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.scss';

export const AuthNavigation = () => {
  return (
    <div className={styles.linkContainer}>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
      <Link to="/find-a-speaker" className={styles.link}>
        Find a Speaker
      </Link>

      {/* TODO: Remove this link  */}
      <Link to="/speakers/update/profile" className={styles.link}>
        Update Profile
      </Link>
    </div>
  );
};
