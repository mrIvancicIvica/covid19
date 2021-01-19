import { takeEvery } from "redux-saga/effects";
import { hendleGetGlobalData } from "./GlobaldataSaga";
import { hendleAllCountryDaily } from "./allCountryDaily";
import {hendlePickCountry} from './pickCountrySaga'
import { GET_GLOBALDATA } from "../ducks/GlobalData";
import { GET_DAILYDATA } from "../ducks/GlobalData";
import {GET_PICKCOUNTRY} from '../ducks/GlobalData'

export function* watcherSaga() {
  yield takeEvery(GET_GLOBALDATA, hendleGetGlobalData);
  yield takeEvery(GET_DAILYDATA, hendleAllCountryDaily);
  yield takeEvery(GET_PICKCOUNTRY, hendlePickCountry)
}
