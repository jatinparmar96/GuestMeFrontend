import { Link } from "react-router-dom";
import styles from "./AuthNavigation.module.scss";

export const AuthNavigation = () => {
  return (
    <div className={styles.linkContainer}>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
    </div>
  );
};
