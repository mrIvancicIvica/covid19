import { call, put } from "redux-saga/effects";
import { setGlobalData } from "../ducks/GlobalData";
import axios from "axios";

function requestGetGlobalData() {
  return axios.request({
    method: "GET",
    url: "https://api.covid19api.com/summary",
  });
}

export function* hendleGetGlobalData() {
  try {
    const response = yield call(requestGetGlobalData);
    const {
      data: {
        Global: {
          NewConfirmed,
          TotalConfirmed,
          NewDeaths,
          TotalDeaths,
          NewRecovered,
          TotalRecovered,
        },
      },
    } = response;
    yield put(
      setGlobalData({
        NewConfirmed,
        TotalConfirmed,
        NewDeaths,
        TotalDeaths,
        NewRecovered,
        TotalRecovered,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
