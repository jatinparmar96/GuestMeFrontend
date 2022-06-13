import styles from "./Header.module.scss";
import { AuthNavigation } from "../../Components/AuthNavigation/AuthNavigation";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className="navigationContainer">
        <AuthNavigation></AuthNavigation>
      </div>
    </header>
  );
};
