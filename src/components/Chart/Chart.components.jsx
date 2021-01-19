import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyData } from "../../Redux/ducks/GlobalData";
import { Line, Bar } from "react-chartjs-2";
import * as moment from "moment";

import styles from './Chart.module.css'


const Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyData());
  }, [dispatch]);

  const dailyData = useSelector((state) => state.globalState.dailyDdata);
  if (!dailyData) return null;

  return (
    <div className={styles.container}>
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) =>
            moment(reportDate).format("MMMM Do, h:mm")
          ),

          datasets: [
            {
              data: dailyData.map((data) => data.confirmed.total),
              label: "Infected",
              borderColor: "blue",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths.total),
              label: "Deaths",
              borderColor: "red",
              fill: true,
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
