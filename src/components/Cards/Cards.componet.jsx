import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalData } from "../../Redux/ducks/GlobalData";

import styles from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalData());
  }, [dispatch]);

  const globalData = useSelector((state) => state.globalState.global);
  if (!globalData) return null;

  const {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  } = globalData;
  // console.log(globaData);

  return (
    <div>
      <h1>Global state</h1>
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <div className='header'>Total Confirmed</div>
            <div className='meta'>{TotalConfirmed}</div>
            <div className='description'>This is total number of infected</div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='header'>Total Recovered</div>
            <span className='meta'>{TotalRecovered}</span>
            <div className='description'>This is total number of recovered</div>
          </div>
        </div>
        <div className='card'>
          <div className='content'>
            <div className='header'>Total Deaths</div>
            <div className='meta'>{TotalDeaths}</div>
            <div className='description'>This is total number of detahs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
