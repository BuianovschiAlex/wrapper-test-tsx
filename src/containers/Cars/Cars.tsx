import { Link } from "react-router-dom";

import { CarBrands } from "../../Data_Cars/carBrands.data";
import { firstLetterToUpperCase } from "../../utils/string";
import styles from "./Cars.module.scss";

export const Cars = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        {CarBrands.map((item) => {
          return (
            <Link to={`/cars/${item.name}/`}>
              <button className={styles.buttonMers} onClick={() => undefined}>
                <img className={styles.imgMercedes} src={item.img} />
                Show {firstLetterToUpperCase(item.name)} Cars
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
