import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.componet";
import Chart from "./components/Chart/Chart.components";
import CountryPicker from "./components/CountryPicker/Country-Picker.component";

import styles from "./App.module.css";

function App() {
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     const result = await fetchData();
  //     setData(result);
  //   };
  //   fetchDatas();
  // }, []);

  return (
    <div className={styles.container}>
      <Cards />
      <Chart />
      <CountryPicker />
      <p>&copy; 2021 Ivančić Ivica for Include</p>
    </div>
  );
}

export default App;
