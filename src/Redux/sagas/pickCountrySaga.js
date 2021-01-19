import { call, put } from "redux-saga/effects";
import { setPickCountry } from "../ducks/GlobalData";
import axios from "axios";

function requestPickCountry() {
  return axios.request({
    method: "GET",
    url: "https://api.covid19api.com/dayone/country/croatia",
  });
}

export function* hendlePickCountry() {
  try {
    const response = yield call(requestPickCountry);
    const { data } = response;
    yield put(setPickCountry(data));
  } catch (error) {
    console.log(error);
  }
}