import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "../HomePage/HomePage";
import { Cars } from "../Cars/Cars";
import { Header } from "../../components/Header/Header";
import { CarModels } from "../../components/Car/CarsModel/CarModels";

import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:brand" element={<CarModels />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
