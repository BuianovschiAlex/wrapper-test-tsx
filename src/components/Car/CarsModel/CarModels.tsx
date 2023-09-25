import { useParams } from "react-router-dom";
import { ButtonBackCars } from "../../Ui/ButtonBackCars";

import { CarBrands } from "../../../Data_Cars/carBrands.data";
import { firstLetterToUpperCase } from "../../../utils/string";
import { ModelDataType } from "../../../Data_Cars/carBrands.data";

import styles from "./CarModels.module.scss";


export const CarModels = () => {
  const { brand } = useParams();
  const data = CarBrands.find((item) => item.name === brand)?.models;

  return (
    <div className={styles.wrapper}>
      <h1>Cars</h1>
      <h1>Brand - {brand && firstLetterToUpperCase(brand)}</h1>
      {<ButtonBackCars />}
      <div>
        {data &&
          data.map((car: ModelDataType) => (
            <div key={car.id} className={styles.container}>
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url(${car.image})`,
                }}
              />
              <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{car.price}</p>
                <button className={styles.buttonCar}>
                  <a href={car.url} target="_blank">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
