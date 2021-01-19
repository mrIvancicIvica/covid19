import { call, put } from "redux-saga/effects";
import { setDailyData } from "../ducks/GlobalData";
import axios from "axios";

function requestaAllCountryDaily() {
  return axios.request({
    method: "GET",
    url: "https://covid19.mathdro.id/api/daily",
  });
}

export function* hendleAllCountryDaily() {
  try {
    const response = yield call(requestaAllCountryDaily);
    const { data } = response;
    yield put(setDailyData(data));
  } catch (error) {
    console.log(error);
  }
}
