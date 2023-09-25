import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
      </ul>
    </div>
  );
};
